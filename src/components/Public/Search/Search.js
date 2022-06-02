import { Key } from "../../../config/Key";
import { Api } from "../../../services/Api";
import { ImagePath } from "../../../config/ImageURL";
import { Container, ContentList, Content } from "./search-style";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Search(){
    const [search, setSearch] = useState([]); 
    const location = useLocation()  

    useEffect(() => { load() }, []);

    async function load(){
        try{
            await fetch(`${Api}search/multi${location.search}&api_key=${Key}&language=en-US`)
            .then(response => response.json())
            .then(data => {console.log(data.results); setSearch(data.results)})
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Container className="Search">
            <h1>Resultados da busca</h1>
            <ContentList>
                {search.map(search => {
                    if(search.media_type === 'tv'){
                        return(
                            <Content key={search.id}>
                                <Link to={`/SeriesDetails/${search.id}`}><img src={`${ImagePath}${search.poster_path}`} alt={search.alt}></img></Link>
                                <span>{search.name}</span>
                            </Content>
                        )
                    }else{
                        return(
                            <Content key={search.id}>
                                <Link to={`/MovieDetails/${search.id}`}><img src={`${ImagePath}${search.poster_path}`} alt={search.alt}></img></Link>
                                <span>{search.title}</span>
                            </Content>
                        )
                    }
                })}
            </ContentList>
        </Container>
    )
}

export default Search;