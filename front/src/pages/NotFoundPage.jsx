import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
export default function NotFoundPage() {
    const error = useRouteError();
    console.error(error);
  return (
    <main id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Return to Home</Link>
    </main>
  );
}