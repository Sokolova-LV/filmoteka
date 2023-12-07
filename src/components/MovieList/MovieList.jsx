import { Container, List, Item, StyledLink, Image, Title } from "./MovieList.styled";

const MovieList = ({ trendMovies }) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    return (
        <Container>
            <List>
                {trendMovies.map(trendMovie => (
                    <Item key={trendMovie.id}>
                        <StyledLink to={`/movies/${trendMovie.id}`}>
                            <Image src={IMG_PATH+trendMovie.poster_path} alt={trendMovie.title} />
                            <Title>{trendMovie.title}</Title>
                        </StyledLink>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default MovieList;