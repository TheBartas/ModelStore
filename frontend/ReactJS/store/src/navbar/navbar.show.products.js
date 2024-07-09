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
                    <li><Link to='/product/insert' id="link">Dodaj produkt</Link></li>
                    <li><Link id="link">Usuń produkt</Link></li>
                    <li><Link to='/' id="link">Menu główne</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default ShowNavBar;




