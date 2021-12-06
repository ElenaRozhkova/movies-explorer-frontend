class Api {

    constructor(options) {
        this._url = options.url;
        this._headers=options.headers;
    }

   _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUser () {
        return fetch(`${this._url}/users/me`, {
                headers: this._headers
            })
            .then(res => this._getResponseData(res));
    }

    updateUserInfo(name, email) {
      return fetch(`${this._url}/users/me`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  name: name,
                  email: email
              })
          })
          .then(res => this._getResponseData(res));
     }

    getMovies() {
      return fetch(`${this._url}/movies`, {
              headers: this._headers
          })
          .then(res => this._getResponseData(res))
  }

    createMovie(movie) {
        return fetch(`${this._url}/movies`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    country: movie.country,
                    director:movie.director,
                    duration:movie.duration,
                    year:movie.year,
                    description:movie.description,
                    image:movie.image,
                    trailer:movie.trailer,
                    thumbnail:movie.image,
                    owner:movie.owner,
                    movieId:movie.movieId,
                    nameRU:movie.nameRU,
                    nameEN:movie.nameEN
                })
            })
            .then(res => this._getResponseData(res))
    }

    deleteMovie = (movieID) => {
      return fetch(`${this._url}/movies/${movieID}`, {
        method: 'DELETE',
        headers: this._headers
    })
    .then(res => this._getResponseData(res))
    }


  register = (email, password, name) => {
        return fetch(`${this._url}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name
            })
        })
        .then(res => this._getResponseData(res));
      };  


 login =(email,password) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        })
    })
    .then(res => this._getResponseData(res));
  };
  
   getContent = (jwt) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
      }})
      .then(res => this._getResponseData(res));
    };
}

const createApi = () => {
    return new Api({
        url: "http://localhost:3001",
    });
};

export const createApiUser = (token) => {
    return new Api({
        url: "http://localhost:3001",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};

const authApi = createApi();
export default authApi;
