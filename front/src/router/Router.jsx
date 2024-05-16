import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Layout from "../pages/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import CommunityPage from "../pages/CommunityPage.jsx";

//Fonction utils pour récupérer les données du backend
import { getUserInfo } from "../utils/getUserInfo.js";
import { getMockedMainData } from "../utils/getMockedMainData.js";
import { getMockedProfileData } from "../utils/getMockedProfileData.js";

// Création du router
function createRouter(getMainData, getProfileData) {
  return createBrowserRouter([
    //route pour la page de connexion fictive
    {
      path: "/",
      element: <LandingPage />,
    },
    // route pour la page utilisateur
    {
      path: "user/:userId",
      element: <Layout />, // composant template avec header et sidebar
      loader: ({ params }) => {
        return getMainData({
          mainData: `http://localhost:4000/user/${params.userId}`,
        });
        //return getMockedMainData(params.userId);
      },
      // en cas d'erreur redirection vers la page notFound
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
          loader: ({ params }) => {
            return getProfileData({
              activity: `http://localhost:4000/user/${params.userId}/activity`,
              averageSession: `http://localhost:4000/user/${params.userId}/average-sessions`,
              performance: `http://localhost:4000/user/${params.userId}/performance`,
            });
            //return getMockedProfileData(params.userId);
          },
          // en cas d'erreur redirection vers la page notFound
          errorElement: <NotFoundPage />,
        },
        {
          path: "settings",
          element: <SettingsPage />,
        },
        {
          path: "community",
          element: <CommunityPage />,
        },
        {
          path: "notfound",
          element: <NotFoundPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
}

const router = createRouter(getUserInfo, getUserInfo);
//const router = createRouter(getMockedMainData, getMockedProfileData);

export default router;
