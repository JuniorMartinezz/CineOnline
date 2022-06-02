import { Link } from "react-router-dom";
import { PageTitle } from "./header-style";

function Header(){
    return(
        <header className="container-fluid p-3 bg-dark text-center text-white">
            <PageTitle><Link to='/Public/' className="nav-link"><h1>Cine Online</h1></Link></PageTitle>
        </header>       
    )
}

export default Header;