import { Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { fetchInfoMovies } from "utils/api";
import MovieCard from "components/MovieCard/MovieCard";
import { StyledLink, Button, Title } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    // movie request

    useEffect(() => {
        const fetchSelectedMovie = async movieId => {
            try {
                const movieResults = await fetchInfoMovies(movieId);
                setSelectedMovie(movieResults);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSelectedMovie(movieId);
    }, [movieId]);

    return (
        <div>
            <StyledLink to={backLink.current}>
                <Button type="button">Go back</Button>
            </StyledLink>
            <Title>Movie info</Title>
            <MovieCard movie={selectedMovie} />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;