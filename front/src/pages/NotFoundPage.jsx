import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import SideBar from "../components/sidebar/SideBar.jsx";

// Composant pour la page notFound en cas d'erreur (api, url invalide)
export default function NotFoundPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <div className="main-wrapper">
          <SideBar />
          <div className="error-page">
            <h1>Erreur!</h1>
            <p>Nous sommes désolés, une erreur est survenue.</p>
            <Link to="/">Retourner vers l'accueil</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
