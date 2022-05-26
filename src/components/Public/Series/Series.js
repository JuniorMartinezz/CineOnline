import { Container, ContentList, Content, Title } from "../styles";
import { useState, useEffect } from "react";
import Key from "../../../config/key";

function Series(){
    const [series, setSeries] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(``)
    }, [])

    return(
        <Container>
            <Title>Séries do momento</Title>
            <ContentList>
                <Content>
                    
                </Content>
            </ContentList>
        </Container>
    )
}

export default Series;