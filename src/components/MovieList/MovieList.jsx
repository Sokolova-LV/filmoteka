import { Container, Title, List, Item, StyledLink } from "./MovieList.styled";

const MovieList = ({ trendMovies }) => {
    return (
        <Container>
            <Title>Popular movies</Title>
            <List>
                {trendMovies.map(trendMovie => (
                    <Item key={trendMovie.id}>
                        <StyledLink to={`/movies/${trendMovie.id}`}>
                            {trendMovie.title}
                        </StyledLink>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default MovieList;