class MoviesApi {
    search() {
      return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
      })
      .then(res => res.json())
    }
  }

  const moviesApi = new MoviesApi();
   
  export default moviesApi; 