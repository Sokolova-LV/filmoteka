import React, { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchSearchMovies } from "utils/api";
import SearchMovie from "components/SearchMovie";

const Movies = () => {
    const [movies, setMovies] = useState([]); 
    const location = useLocation(); 
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (!query) return;

        const getMovie = async () => {
            try {
                const { results } = await fetchSearchMovies(query);
                if (results.length === 0) {
                    toast.error(`Movie not found. Please, try again.`);
                } else {
                    setMovies(results);
                    return;
                }
            } catch (error) {
                toast.error(error.message);
                setMovies([]);
            }
        };
        getMovie();
    }, [searchParams]);

    // movie searching
    const handleSubmit = query => {
        setSearchParams({ query });
    };

    return (
        <main>
            <SearchMovie onSubmit={handleSubmit}/>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Movies;