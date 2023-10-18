import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMovies } from "utils/api";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                const { cast } = await fetchCastMovies(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            }
        };
        getCast();
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            {cast.length > 0 ? (
                <ul>
                {cast.map(({ name, profile_path, character }) => (
                    <li key={name}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                            alt="actor"
                            width={300}
                        />
                        <h2>{name}</h2>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
            ) : (
                <h2>There is no any information about cast</h2>
            )}
        </div>
    );
};

export default Cast;