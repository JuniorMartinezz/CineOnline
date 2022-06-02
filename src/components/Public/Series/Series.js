import { Container, ContentList, Content, Title } from "../Styles/styles";
import { useState, useEffect } from "react";
import { Key } from "../../../config/Key";
import { ImagePath } from "../../../config/ImageURL";
import { Api } from "../../../services/Api";
import { Link } from "react-router-dom";

function Series(){
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetch(`${Api}tv/popular?api_key=${Key}&language=en-US`)
            .then(response => response.json())
            .then(data => { 
                console.log(data.results); 
                setSeries(data.results);
            })
    }, [])
 
    return(
        <Container className="Series">
            <Title>Series</Title>
            <ContentList>
                {series.map(series => {
                    return(
                        <Content key={series.id}>
                            <Link to={`/SeriesDetails/${series.id}`}><img src={`${ImagePath}${series.poster_path}`} alt={series.alt}/></Link>
                            <span>{series.name}</span>
                        </Content>
                    )
                })}
            </ContentList>
        </Container>
    )
}

export default Series;