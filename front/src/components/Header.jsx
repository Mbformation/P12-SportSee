import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../assets/logo.svg';

//Composant Header commun à tous les onglets de l'utilisateur et responsable de la navigation
export default function Header() {
    return (
    <header>
        <Link to='/'><HeaderLogo /></Link>
        <NavBar />
    </header>
    );
}