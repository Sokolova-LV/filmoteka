import axios from "axios";

const API_KEY = '4a3136bad29614034a217fa6beb2440a';
const BASE_URL = 'https://api.themoviedb.org/3';

// fetch popular movies

export const fetchPopularMovies = async () => {
    const { data } = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
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

// fetch movies`s cast

export const fetchCastMovies = async movieId => {
    const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
};

// fetch movies`s reviews

export const fetchReviewsMovies = async movieId => {
    const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data;
};