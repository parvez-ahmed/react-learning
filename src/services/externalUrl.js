const API_KEY = "d0b63d6379efc56e8559b7ae2f7eb754";

const requests = {
    'netflixOriginals':`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    'trending':`/trending/all/week?api_key=${API_KEY}`,
    'documentaries':`/discover/tv?api_key=${API_KEY}`,
    'topRated':`/movie/top_rated?api_key=${API_KEY}`,
    'actionMovies':`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    'comedyMovies':`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    'horrorMovies':`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    'romanceMovies':`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    'documentaries':`/discover/movie?api_key=${API_KEY}&with_genres=28`

}

export {
    requests
};