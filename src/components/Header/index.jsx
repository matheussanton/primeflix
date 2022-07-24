import "./Header.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">PrimeFlix</Link>
            <Link className="favoritos" to="/favorites">Favorite movies</Link>
        </header>
    );
}

export default Header;
