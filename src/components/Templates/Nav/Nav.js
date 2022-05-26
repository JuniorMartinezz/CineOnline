import { Link } from "react-router-dom";
import { Container } from "./nav-style";

function Nav() {
    return (
        <Container className="Nav">
            <nav className="nav justify-content-center bg-dark p-2" id="list-bar">
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/'>Página inicial</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/movies'>Filmes</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/series'>Séries</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to='/Public/contact'>Contato</Link>
                </div>
                <form>
                    <input id="inputSearch" className="form-control" type="text" placeholder="Digite o que deseja assistir..."/>
                </form>
            </nav>
        </Container>

    )
}

export default Nav;