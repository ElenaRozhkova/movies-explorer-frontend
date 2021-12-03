class Api {

    constructor(options) {
        this._url = options.url;
    }

  createMovie(movie) {
        return fetch(`${this._url}/movies`, {
                method: 'POST',
                body: JSON.stringify({
                    country: movie.country,
                    director:movie.director,
                    duration:movie.duration,
                    year:movie.year,
                    description:movie.description,
                    image:movie.image,
                    trailer:movie.trailer,
                    thumbnail:movie.thumbnail,
                    owner:movie.owner,
                    movieId:movie.movieId,
                    nameRU:movie.nameRU,
                    nameEN:movie.nameEN
                })
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
            "email": email,
            "password": password,
            "name": name
            })
        })
        .then(res => this._getResponseData(res));
      };  

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

}


export const createApi = () => {
    return new Api({
        url: "http://localhost:3001",
    });
};
