import { Link, useNavigate } from "react-router-dom";
import { Container } from "./nav-style";
import { useState,  } from "react";

function Nav(props) {
    var navigate = useNavigate();
    const [search, setSearch] = useState("");

    function Search(e){
        e.preventDefault();
        navigate("/Search?query=" + search);
    }

    return (
        <Container className="Nav">
            <nav className="nav justify-content-center bg-secondary p-2" id="list-bar">
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/'>Home</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/movies'>Movies</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/series'>Series</Link>
                </div>
                <form onSubmit={Search}>
                    <input 
                        id="query"  
                        name="query"  
                        type="text" 
                        placeholder="Type a content's name..." 
                        onChange={ (e) => setSearch(e.target.value)}
                    />
                    <button id="btnSearch" className="form-control" type="submit">Search</button>
                </form>
            </nav>
        </Container>

    )
}

export default Nav;