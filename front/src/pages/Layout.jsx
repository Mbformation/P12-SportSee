import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar.jsx';
import { useLoaderData } from 'react-router-dom';

// Composant servant de template pour les différents onglets de chaque utilisateur
export default function Layout() {
    const userData = useLoaderData(); // importation des info générales de l'utilisateur
    return (
    <div className="layout-wrapper">
        <Header />
        <main>
            <div className='main-wrapper'>
                <SideBar />
                <Outlet context={{ userData }}/>
            </div>
        </main>
    </div>
    );
  }