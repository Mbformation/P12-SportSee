import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar.jsx';
import { useLoaderData } from 'react-router-dom';

export default function Layout() {
    const userData = useLoaderData();
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