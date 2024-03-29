import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../assets/logo.svg';
export default function Header() {
    return (
    <header>
        <Link to='/'><HeaderLogo /></Link>
        <NavBar />
    </header>
    );
}