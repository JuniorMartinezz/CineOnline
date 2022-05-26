import { Link } from "react-router-dom";
import './Nav.css';
import { ContentList, Content, Container } from "../../Public/styles";

function Nav() {
    return (
        <Container className="Nav">
            <ContentList className="nav justify-content-center bg-dark p-2" id="listBar">
                <Content className="nav-item">
                    <Link className="nav-link" to='/Public/'>Página inicial</Link>
                </Content>
                <Content className="nav-item">
                    <Link className="nav-link" to='/Public/movies'>Filmes</Link>
                </Content>
                <Content className="nav-item">
                    <Link className="nav-link" to='/Public/series'>Séries</Link>
                </Content>
                <Content className="nav-item">
                    <Link className="nav-link" to='/Public/contact'>Contato</Link>
                </Content>
                <form>
                    <input id="inputSearch" className="form-control" type="text" placeholder="Digite o que deseja assistir..."/>
                </form>
            </ContentList>

        </Container>

    )
}

export default Nav;