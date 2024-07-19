import { Link } from "react-router-dom";
import './navbar.insert.css';



const ShowNavBar = () => {
    return (
        <nav className="Navbar-Panel">
            <div className="nav-logo">
                <h2>Model Store</h2>
            </div>
            <div className="nav-items">
                <ul className="Ul-Panel">
                    <li><Link to='/profile/product/insert' id="link">Dodaj produkt</Link></li>
                    <li><Link to='/login' id="link">Wyloguj</Link></li>
                    <li><Link to='/profile/settings/password' id='link'>Zmień hasło</Link></li>
                    <li><Link to='/profile/cart' id="link">Koszyk</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default ShowNavBar;




