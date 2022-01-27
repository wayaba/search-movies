const API_KEY = 'cc64ed57'
const url = "http://www.omdbapi.com/?apikey=" + API_KEY

export const OmdbAPI = {
    searchMovies,
    searchMovieById
};

function searchMovies(searchValue) {    
    return fetch(`${url}&s=${searchValue}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

function searchMovieById(id) {    
    return fetch(`${url}&i=${id}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
