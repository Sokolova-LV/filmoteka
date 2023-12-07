import { Container, Item, List, StyledLink, Image, Title } from "./MoviesBySearch.styled";

const MoviesBySearch = ({ searchMovies }) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    return (
        <Container>
            <List>
                {searchMovies.map(searchMovie => (
                    <Item key={searchMovie.id}>
                        <StyledLink to={`/movies/${searchMovie.id}`}>
                            <Image src={IMG_PATH + searchMovie.poster_path} alt={searchMovie.title} />
                            <Title>{searchMovie.title}</Title>
                        </StyledLink>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default MoviesBySearch;