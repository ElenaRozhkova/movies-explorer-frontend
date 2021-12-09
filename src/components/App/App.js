import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import React, {useEffect, useState} from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import moviesApi from '../../utils/MoviesApi';
import authApi from '../../utils/MainApi';
import { createApiUser } from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CHORTMOVIE } from '../../utils/constants';


function App() {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cards, setCards] = useState([]);
  const [saveCards, setSaveCards] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [notMovies, setNotMovies] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [api, setApi] = React.useState({});
  const [savedCardsId, setSavedCardsId] = React.useState([]);
  const [moviesChecked, setMoviesChecked] = useState(false);
  const [savemoviesChecked, setSaveMoviesChecked] = useState(false);
  
 
  const updateProfile = (token) => {
    const moviesApi = createApiUser(token);
    setApi(moviesApi);
    Promise.all([moviesApi.getUser(), moviesApi.getMovies()])
        .then(([user, savemovies]) => {
            setCurrentUser(user);
            const mySaveMovies = savemovies.filter(e=>e.owner===user._id);
            setSaveCards(mySaveMovies);
            const savemovieId = mySaveMovies.map((movie) => movie.movieId);
            setSavedCardsId(savemovieId);
        })
        .catch((err) => {
            console.log(err);
        });
};

  useEffect(() => {
    if (localStorage.getItem('movies')) {
    const movies=JSON.parse(localStorage.getItem('movies'));
    const checked=localStorage.getItem('checked');
    setMoviesChecked(checked);
    createCards(movies);
  }
  }, [])

  useEffect(() => {
    if (isSubmitting) {
      moviesApi.search()
          .then(data => {
            setNotMovies('');
            const key = new RegExp(searchQuery, "gi");
            const movies = data.filter(v => key.test(v.nameRU) || key.test(v.nameEN));
            if (movies.length === 0) {setNotMovies('Ничего не найдено');} 
            else{
              localStorage.setItem('movies', JSON.stringify(movies));
              localStorage.setItem('checked', moviesChecked);
            } 
            setIsSubmitting(false);
            createCards(movies); 
          })
          .catch((err)=>{
            setIsSubmitting(false)
            setNotMovies(`Во время запроса произошла ошибка. Возможно, 
            проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз.`);
          })
    }

  }, [isSubmitting, searchQuery, moviesChecked])

  useEffect(() => {
    tokenCheck()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  }

  const createCards =(movies)=>{
    setCards(movies.map(item => ({
      country: item.country ? item.country : 'notdefine',
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `https://api.nomoreparties.co${item.image.url}`,
      trailer: item.trailerLink,              
      thumbnail: item.image.formats.thumbnail ? item.image.formats.thumbnail : 'notdefine',
      movieId:  item.id,
      nameRU: item.nameRU,              
      nameEN: item.nameEN ? item.nameEN : 'notdefine',
    })))
  }


    const handleCardLike=(movie)=>{
      api.createMovie(movie)
       .then((saveMovie)=>{
         setSaveCards([...saveCards, {...saveMovie}]);
         setSavedCardsId([...savedCardsId, saveMovie.movieId]);
       })
       .catch((err) => {
        console.log(err);
         });
    }

    const handleCardDelete=(movie)=>{
      let movieDelete={};
      if (!movie._id) {
      const movienew = saveCards.filter(v => v.movieId===movie.movieId);
            movieDelete=movienew[0];
      }
      else movieDelete=movie;
      api.deleteMovie(movieDelete._id)
       .then((deleteMovie)=>{
          // Формируем новый массив на основе имеющегося, удаляя из него карточку card._id
          const newSaveMovies = saveCards.filter(function (c) {
            return c._id !== deleteMovie._id;
           });
          const filteredMoviesIds = savedCardsId.filter(function (id) {
            return id !== deleteMovie.movieId;
          });
        setSaveCards(newSaveMovies);
        setSavedCardsId(filteredMoviesIds);
       })
       .catch((err) => {
        console.log(err);
         });
    }

    const handleChecked=()=>{
      setMoviesChecked(!moviesChecked);
    }

    const handleSaveChecked=()=>{
      setSaveMoviesChecked(!savemoviesChecked);
    }

    const filterMovies=(filtermovie)=> {
      if (filtermovie.length !== 0 || filtermovie !== "undefind") {
        return filtermovie.filter((movie)=>
        moviesChecked ? movie.duration <= CHORTMOVIE : true
        );
      }
    }

    const filterSaveMovies=(filtermovie)=> {
      if (filtermovie.length !== 0 || filtermovie !== "undefind") {
        return filtermovie.filter((movie)=>
        savemoviesChecked ? movie.duration <= CHORTMOVIE : true
        );
      }
    }

    const updateProfileDaten=({name, email})=>{
      api.updateUserInfo(name, email)
      .then ((res)=>{
        setCurrentUser(res);
        setText("Вы успешно редактировали Ваш аккаунт!");
        handleLoginClick(true);
      })
      .catch((err) => {
        setText("Что-то пошло не так! Попробуйте ещё раз.");
        handleLoginClick(true);
    })
    }

    const handleLoginClick=(value)=> {
      setIsInfoTooltipOpen(value);
  }
    const onRegister = (email, password, name) => {
      authApi.register(email, password, name)
          .then((res) => {
              if (res) {
                setText("Вы успешно зарегистрировались!");
                handleLoginClick(true);
                setLoggedIn(true);
                onLogin(email, password);
                history.push('/movies');
              }
          })
          .catch((err) => {
                setText("Что-то пошло не так! Попробуйте ещё раз.");
                history.push('/signup');
                handleLoginClick(true);
          })
  }

  const onLogin = (email, password) => {
    authApi.login(email, password)
      .then((data) => {
          if (data.token) {
              localStorage.setItem('jwt', data.token);
              email = '';
              password = '';
              handleLogin(); // обновляем стейт внутри App.js
              tokenCheck();
              history.push('/movies'); // и переадресуем пользователя! 
          }
      })
    .catch(err => {
      console.log(err)});
}

  const tokenCheck =() =>{
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        authApi.getContent(jwt)
        .then((res) => {
            if (res) {
                setLoggedIn(true);
                updateProfile(jwt);
                history.push("/movies");
            }
        })            
        .catch((err) => {
            console.log(err);
        })
    }
  }

  const closePopupNew=()=> {
    setIsInfoTooltipOpen(false);
    history.push('/movies');
}

const handleLogin=()=> {
  setLoggedIn(true);
}

const onSignOut =()=>{
  localStorage.removeItem('jwt');
  localStorage.removeItem('movies');
  setLoggedIn(false);
  history.push('/');
}


  return (
    <div className="App">
        <CurrentUserContext.Provider value={currentUser} >
        <div className="root">
          <Switch>                  
            <Route path="/" exact>
              <Main loggedIn={loggedIn} />
              <Footer />
            </Route>

            <Route path="/signup">
              <Register onRegister={onRegister} />
            </Route>

            <Route path="/signin" > 
            {!loggedIn
              ? <Login
                onLogin={onLogin}
              /> : <Redirect to="/movies" />
            }     
            </Route>

            <ProtectedRoute path="/movies" 
                      cards={filterMovies(cards)}
                      loggedIn={loggedIn}
                      component={Movies}
                      isSubmitting={isSubmitting}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSubmit={handleSubmit} 
                      notMovies={notMovies}
                      onCardLike={handleCardLike}
                      savedCardsId={savedCardsId} 
                      onCardDelete={handleCardDelete}
                      handleChecked={handleChecked}
                      moviesChecked={moviesChecked}
              />      

            <ProtectedRoute path="/saved-movies" 
                      cards={filterSaveMovies(saveCards)}
                      loggedIn={loggedIn}
                      component={SavedMovies}
                      onCardDelete={handleCardDelete}
                      handleChecked={handleSaveChecked}
                      savedCardsId={savedCardsId}    
            />

            <ProtectedRoute path="/profile"  
                      loggedIn={loggedIn}
                      component={Profile}
                      onSignOut={onSignOut} 
                      updateProfileDaten={updateProfileDaten}     
            />


            <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <InfoTooltip isOpen={isInfoTooltipOpen}
                            onClose={closePopupNew}
                            text={text}
                        />
        </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
