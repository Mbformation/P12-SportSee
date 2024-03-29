import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar.jsx';

export default function Layout() {
    return (
    <div className="layout-wrapper">
        <Header />
        <main>
        <SideBar />
        <Outlet />
        </main>
    </div>
    );
  }