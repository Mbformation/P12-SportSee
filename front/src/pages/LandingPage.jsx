import {Link } from 'react-router-dom';

export default function LandingPage() {
    return (
      <div>
        <Link to={`/user/12/profile`}>Karl Dovineau</Link>
        <Link to={`/user/18/profile`}>Cecilia Ratorez</Link>
      </div>
    );
  }