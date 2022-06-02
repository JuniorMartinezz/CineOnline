import { Container, ContentList, Title, Content } from "./styles";
import { Key } from "../../../config/Key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImagePath } from "../../../config/ImageURL";
import { Api } from "../../../services/Api";

function Movies(){
    const [movies, setMovies] = useState([]); // o nosso dado inicial eh uma array, que retorna a lista de filmes da api

    useEffect(() => {
        fetch(`${Api}movie/popular?api_key=${Key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])

    return(
        <Container className="Movies">
            <Title>Movies</Title>
            <ContentList>
                {movies.map(movies => {
                    return(
                        <Content key={movies.id}>
                            <Link to={`/MovieDetails/${movies.id}`}><img src={`${ImagePath}${movies.poster_path}`} alt={movies.alt}></img></Link>
                            <span>{movies.title}</span>
                        </Content>
                    )
                })}
            </ContentList>
        </Container>
    )
}

export default Movies;

