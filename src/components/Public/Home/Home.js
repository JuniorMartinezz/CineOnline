import { Container, ContentList, Content, Title } from "../Styles/styles";
import { Key } from "../../../config/Key";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { ImagePath } from "../../../config/ImageURL";
import { Api } from "../../../services/Api";

function Home(){
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(`${Api}trending/all/day?api_key=${Key}`)
            .then(response => response.json())
            .then(data => {                
                setContent(data.results)
            })
    }, [])
        
    return(
        <Container className="Home">
            <Title>Populares</Title>   
            <ContentList>     
                {content.map(content => {
                    if(content.media_type === "tv"){
                        return(
                            <Content key={content.id}>
                                <Link to={`/SeriesDetails/${content.id}`}><img src={`${ImagePath}${content.poster_path}`} alt={content.alt}/></Link>
                                <span>{content.name}</span>
                            </Content>
                        )
                    }else{
                        return(
                            <Content key={content.id}>
                                <Link to={`/Moviedetails/${content.id}`}><img src={`${ImagePath}${content.poster_path}`} alt={content.alt}/></Link>
                                <span>{content.title}</span>
                            </Content>
                        )
                    }
                })}           
            </ContentList>
        </Container>     
    )
}

export default Home;