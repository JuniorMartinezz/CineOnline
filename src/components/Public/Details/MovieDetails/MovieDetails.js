import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Key } from "../../../../config/Key";
import { BgPath, ImagePath } from "../../../../config/ImageURL";
import { Container } from "./styles";

function MovieDetails(){
    const { id } = useParams()
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const{title, poster_path, overview, release_date, backdrop_path} = data

                const content = {
                    id, 
                    title,
                    sinopse: overview,
                    image: `${ImagePath}${poster_path}`,
                    releaseDate: release_date,
                    backdropPath: `${BgPath}${backdrop_path}`
                }
                setContent(content);
            })
    }, [id])

    return(
        <Container className="Details">
            <div
                className="bg"    
                style={{backgroundImage: `url(${content.backdropPath})`}}        
                >

            </div>
            <div className="content">
                <img src={content.image} alt={content.sinopse}></img>
                <div className="details">
                    <h1>{content.title}</h1>
                    <span>Sinopse: {content.sinopse}</span>
                    <span className="release-date"> Release date: {content.releaseDate}</span>
                    <Link to='/Public/'><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default MovieDetails;