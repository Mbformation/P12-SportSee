import {Link } from 'react-router-dom';

export default function LandingPage() {
    return (
      <div>
        <Link to={`/user/12`}>Bernard</Link>
        <Link to={`/user/18`}>Cecilia</Link>
      </div>
    );
  }