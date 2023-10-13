import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'utils/api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        const fetchTrendMovies = async () => {
            try {
                const { results } = await fetchPopularMovies();
                setTrendMovies(results);
            } catch (error) {
                error(error.message);
            }
        };
        fetchTrendMovies();
    }, []);

    return (
        <div>
            <MovieList trendMovies={trendMovies} />
        </div>
    );
};

export default Home;