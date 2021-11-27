import './App.css';
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'


function App() {
  return (
    <div className="root">
     <Switch>
       <Route path="/movies" > 
         <Movies /> 
         <Footer />       
       </Route>

       <Route path="/saved-movies" > 
         <SavedMovies /> 
         <Footer />       
       </Route>

       <Route path="/profile" > 
         <Profile />        
       </Route>

       <Route path="/signup" > 
         <Register />        
       </Route>

       <Route path="/signin" > 
         <Login />        
       </Route>
     
       <Route path="/" exact>
         <Main />
         <Footer />
       </Route>

       <Route path="*">
          <NotFound />
        </Route>

       </Switch>

    </div>
  );
}

export default App;
