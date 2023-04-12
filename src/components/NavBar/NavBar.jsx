import './NavBar.scss';
import logo from "../../../public/image (3).png";


const NavBar = () => {
    return (
        <nav className='navbar'>
            <img className='navbar__img' src={ logo } alt="" />
            <ul className='navbar__title'>
                <li className='navbar__link'>
                <a href='/'>Produits de saison</a>
                </li>
                <li className='navbar__link'>
                <a href='/'>Plan de la cueillette</a>
                </li>
                <li className='navbar__link'>
                <a href='/'>Visite scolaire</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;