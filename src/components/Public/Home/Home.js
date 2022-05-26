import { Container, ContentList, Content, Title } from "../styles";
import Key from "../../../config/key"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import ImagePath from "../../../config/ImagePath";

function Home(){
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${
            Key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setContent(data.results)
            })
    }, [])

    return(
        <Container className="Home">
            <Title>Populares</Title>   
            <ContentList>     
                {content.map(content => {
                    return(
                        <Content key={content.id}>
                            <Link to={`/details/${content.id}`}><img src={`${ImagePath}${content.poster_path}`} alt={content.alt}/></Link>
                            <span>{content.title}</span>
                        </Content>
                    )
                })}           
            </ContentList>
        </Container>     
    )
}

export default Home;