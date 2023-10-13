import { Link } from "react-router-dom";
import { Container, Title, List, Item } from "./MovieList.styled";

const MovieList = ({ trendMovies }) => {
    return (
        <Container>
            <Title>Popular movies</Title>
            <List>
                {trendMovies.map(trendMovie => (
                    <Item key={trendMovie.id}>
                        <Link to={`/movies/${trendMovie.id}`}>
                            {trendMovie.title}
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default MovieList;