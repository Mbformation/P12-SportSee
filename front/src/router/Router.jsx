import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <NotFoundPage />
    },
    {
        path: 'user/:userId',
        element: <ProfilePage />
    }
])

export default router;