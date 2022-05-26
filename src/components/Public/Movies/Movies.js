import { Container, ContentList, Content, Title } from "../Styles/styles";
import Key from "../../../config/Key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImagePath from "../../../config/ImagePath";

function Movies(){
    const [movies, setMovies] = useState([]); // o nosso dado inicial eh uma array, que retorna a lista de filmes da api

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${Key}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <Container className="Movies">
            <Title>Movies</Title>
            <ContentList>
                {movies.map(movie => {
                    return(
                        <Content key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${ImagePath}${movie.poster_path}`} alt={movie.alt}></img></Link>
                        <span>{movie.title}</span>
                        </Content>
                    )
                })}
            </ContentList>
        </Container>
    )
}

export default Movies;

