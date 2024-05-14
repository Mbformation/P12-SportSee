import {Link } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../assets/logo.svg';


export default function LandingPage() {
    return (
      <div className='sign-in'>
        <HeaderLogo />
        <div className="sign-in-links">
          <Link to={`/user/12/profile`}>👉 Karl Dovineau</Link>
          <Link to={`/user/18/profile`}>👉 Cecilia Ratorez</Link>
        </div>
      </div>
    );
  }