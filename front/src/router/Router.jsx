import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import Layout from '../pages/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import CommunityPage from '../pages/CommunityPage.jsx';

import { getUserInfo } from '../utils/getUserInfo.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <NotFoundPage />
    },
    {
        path: 'user/:userId',
        element: <Layout />,
        loader: ({ params }) => {
            return getUserInfo(
                {
                    getMainData:`http://localhost:4000/user/${params.userId}`,
                }
            );
        },
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,    
                loader: ({ params }) => {
                    return getUserInfo(
                        {
                            getActivity:`http://localhost:4000/user/${params.userId}/activity`,
                            getAverageSession:`http://localhost:4000/user/${params.userId}/average-sessions`,
                            getPerformance:`http://localhost:4000/user/${params.userId}/performance`
                        }
                    );
                },
            },
            {
                path: 'settings',
                element: <SettingsPage />,    
            },
            {
                path: 'community',
                element: <CommunityPage />,    
            },
            { 
                path: "*", 
                element: <NotFoundPage /> 
            },
        ]
    },
    
]);
export default router;