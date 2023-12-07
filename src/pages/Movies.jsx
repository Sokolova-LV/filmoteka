import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchSearchMovies } from "utils/api";
import SearchMovie from "components/SearchMovie/SearchMovie";
import MoviesBySearch from "components/MoviesBySearch/MoviesBySearch";

const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]); 
    //const location = useLocation(); 
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
                    setSearchMovies(results);
                    return;
                }
            } catch (error) {
                toast.error(error.message);
                setSearchMovies([]);
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
            <MoviesBySearch searchMovies={searchMovies}/>
        </main>
    );
};

export default Movies;