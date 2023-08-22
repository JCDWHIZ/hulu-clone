const API_kEY = "9de4a25a36cbb338a58d275bd299f195";

export default {
  fetchTrending: `/trending/movie/day?language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_kEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_kEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_kEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_kEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_kEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_kEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_kEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_kEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_kEY}&with_genres=10770`,
};
