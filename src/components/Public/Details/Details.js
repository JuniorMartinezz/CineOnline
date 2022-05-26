import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Key from "../../../config/key";
import ImagePath from "../../../config/ImagePath";
import { Container } from "../styles";

function Details(){
    const { idContent } = useParams()
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${idContent}?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const{title, poster_path, overview, release_date} = data

                const content = {
                    idContent, 
                    title,
                    sinopse: overview,
                    image: `${ImagePath}${poster_path}`,
                    releaseDate: release_date
                }
                setContent(content);
            })
    }, [idContent])

    return(
        <Container className="Details">
            <h1>Detalhes</h1>
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