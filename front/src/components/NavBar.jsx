import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
      <nav>
        <ul>
          <li><Link to={`home`}>Accueil</Link></li>
          <li><Link to={`profile`}>Profile</Link></li>
          <li><Link to={`settings`}>Réglages</Link></li>
          <li><Link to={`community`}>Communauté</Link></li>
        </ul>
      </nav>
    );
  }