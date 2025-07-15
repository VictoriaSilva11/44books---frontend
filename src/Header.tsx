import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="cabecalho">
            <div className="logo"> 
                <Link to="/">44Books</Link>
            </div>
            <nav className="menu">
                <a><link to="/Home">Home</link></a>
                <a><Link to="/Livros">Livros</Link></a>
                <a><Link to="/Admin">Admin</Link></a>
            </nav>
        </header>
    );
}

