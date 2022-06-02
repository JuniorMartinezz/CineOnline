import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Key } from "../../../../config/Key";
import { ImagePath, BgPath } from "../../../../config/ImageURL";
import { Container } from "./styles";

function SeriesDetails(){
    const { id } = useParams()
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const{name, poster_path, overview, first_air_date, backdrop_path} = data

                const content = {
                    id, 
                    name,
                    sinopse: overview,
                    image: `${ImagePath}${poster_path}`,
                    releaseDate: first_air_date,
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
                    <h1>{content.name}</h1>
                    <span>Sinopse: {content.sinopse}</span>
                    <span className="release-date"> Release date: {content.releaseDate}</span>
                    <Link to='/Public/'><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default SeriesDetails;