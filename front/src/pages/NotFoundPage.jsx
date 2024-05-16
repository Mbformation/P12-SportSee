import { Link } from 'react-router-dom';

// Composant pour la page notFound en cas d'erreur (api, url invalide)
export default function NotFoundPage() {
  return (
    <div className="error-page">
      <h1>Erreur!</h1>
      <p>Nous sommes désolés, une erreur est survenue.</p>
      <Link to="/">Retourner vers l'accueil</Link>
    </div>
  );
}