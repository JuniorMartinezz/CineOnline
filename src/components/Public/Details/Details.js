import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Key from "../../../config/Key";
import ImagePath from "../../../config/ImagePath";
import { Container, Title  } from "../Details/styles";

function Details(){
    const { id } = useParams()
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const{title, poster_path, overview, release_date} = data

                const content = {
                    id, 
                    title,
                    sinopse: overview,
                    image: `${ImagePath}${poster_path}`,
                    releaseDate: release_date
                }
                setContent(content);
            })
    }, [id])

    return(
        <Container className="Details">
            <div className="content">
                <img src={content.image} alt={content.sinopse}></img>
                <div className="details">
                    <h1>{content.title}</h1>
                    <span>Sinopse: {content.sinopse}</span>
                    <span className="release-date"> Release date: {content.releaseDate}</span>
                    <button>Go Back</button>
                </div>
            </div>
        </Container>
    )
}

export default Details;