import axios  from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "46b3f59426184a509f6df0ebc7e23417";

// https://api.themoviedb.org/3/search/movie?api_key=46b3f59426184a509f6df0ebc7e23417&query=Inception

    // https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY

const getTrendingMovies = async () => {
    const response = await axios.get(`${movieBaseUrl}/trending/movie/day?api_key=${apiKey}`);
    return response.data.results;
}
export default {
    getTrendingMovies
}