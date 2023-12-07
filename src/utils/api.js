import axios from "axios";

const API_KEY = '4a3136bad29614034a217fa6beb2440a';
const BASE_URL = 'https://api.themoviedb.org/3';

// fetch popular movies

export const fetchPopularMovies = async () => {
    const { data } = await axios.get(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return data;
};

// fetch movies by search

export const fetchSearchMovies = async query => {
    const { data } = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
    return data;
};

// fetch movies`s info

export const fetchInfoMovies = async movieId => {
    const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return data;
};

// fetch movies`s video

export const fetchVideoMovie = async movieId => {
    const { results } = await axios.get(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    return results;
};