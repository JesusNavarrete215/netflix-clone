const API_KEY = "b3f6203bfaffb2f586183d25c57ac065";

const requests = {
  //we are creating an object with the endings of the url so we can switch them instead of the whole url
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}; //makes it easier to use later
//https://api.themoviedb.org/3/trending/all/week?api_key=b3f6203bfaffb2f586183d25c57ac065&language=en-US
//https://api.themoviedb.org/3/discover/tv?api_key=b3f6203bfaffb2f586183d25c57ac065&with_networks=213
export default requests;
