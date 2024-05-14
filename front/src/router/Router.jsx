import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import Layout from '../pages/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import CommunityPage from '../pages/CommunityPage.jsx';

import { getUserInfo } from '../utils/getUserInfo.js';
import {USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE} from '../dataMocked.js'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
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
            return USER_MAIN_DATA // TODO
            
        },
        errorElement: <NotFoundPage />,
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
                            getPerformance:`http://localhost:4000/user/${params.userId}/performance`,
                        }
                    );
                },
                errorElement: <NotFoundPage />,
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
                path: 'notfound',
                element: <NotFoundPage />,    
            },
            { 
                path: "*", 
                element: <NotFoundPage /> 
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />,    
    },
]);
export default router;