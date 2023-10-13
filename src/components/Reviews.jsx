import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMovies } from "utils/api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const { results } = await fetchReviewsMovies(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error);
            }
        };
        getReviews();
    }, [movieId]);

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(({ author, content, id }) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2>There is no any reviews</h2>
            )}
        </div>
    );
};

export default Reviews;