import PropTypes from 'prop-types';
import { Container, Image, Title, Text, Article } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
    const { title, genres, release_date, overview, vote_average, poster_path } = movie;
    const releaseDate = new Date(release_date).getFullYear();
    const userRate = ((vote_average / 10) * 100).toFixed(0);
    const imgURL = `https://image.tmdb.org/t/p/w300${poster_path}`;

    return (
        <div>
            {imgURL && <Image src={imgURL} alt={title} />}
            <Container>
                <Title>
                    {title}  
                ({releaseDate})
                </Title>
                {userRate && <Text>User rate: {userRate}%</Text>}
                <Article>Overview</Article>
                <Text>{overview}</Text>
                <Article>Genres</Article> 
                {genres && genres.length > 0 ? (
                    <Text>
                        {genres[0] && genres[0].name}
                    </Text>
                ) : (
                <p>There is no information about genres</p>
                )}
            </Container>
        </div>
    );
};


MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string.isRequired })
        ),
    }).isRequired,
};

export default MovieCard;