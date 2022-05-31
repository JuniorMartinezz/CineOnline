import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Key from "../../../../config/Key";
import ImagePath from "../../../../config/ImagePath";
import { Container } from "./styles";

function SeriesDetails(){
    const { id } = useParams()
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const{name, poster_path, overview, first_air_date} = data

                const content = {
                    id, 
                    name,
                    sinopse: overview,
                    image: `${ImagePath}${poster_path}`,
                    releaseDate: first_air_date
                }
                setContent(content);
            })
    }, [id])

    return(
        <Container className="Details">
            <div className="content">
                <img src={content.image} alt={content.sinopse}></img>
                <div className="details">
                    <h1>{content.name}</h1>
                    <span>Sinopse: {content.sinopse}</span>
                    <span className="release-date"> Release date: {content.releaseDate}</span>
                    <button>Go Back</button>
                </div>
            </div>
        </Container>
    )
}

export default SeriesDetails;