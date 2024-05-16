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

// Création du router
function createRouter() {
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
        // return getUserInfo({
        //   getMainData: `http://localhost:4000/user/${params.userId}`,
        // });
        return getMockedMainData(params.userId);
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
            // return getUserInfo({
            //   getActivity: `http://localhost:4000/user/${params.userId}/activity`,
            //   getAverageSession: `http://localhost:4000/user/${params.userId}/average-sessions`,
            //   getPerformance: `http://localhost:4000/user/${params.userId}/performance`,
            // });
            return getMockedProfileData(params.userId);
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

// Fontion mock pour récupérer les données générales des utilisateurs
const getMockedMainData = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId === "12") {
      resolve([
        {
          data: {
            id: 12,
            userInfos: {
              firstName: "Karl",
              lastName: "Dovineau",
              age: 31,
            },
            todayScore: 0.12,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50,
            },
          },
        },
      ]);
    } else if (userId === "18") {
      resolve([
        {
          data: {
            id: 18,
            userInfos: {
              firstName: "Cecilia",
              lastName: "Ratorez",
              age: 34,
            },
            score: 0.3,
            keyData: {
              calorieCount: 2500,
              proteinCount: 90,
              carbohydrateCount: 150,
              lipidCount: 120,
            },
          },
        },
      ]);
    } else {
      reject(new Error("Invalid user ID"));
    }
  });
};

// Fontion mock pour récupérer les données du profil des utilisateurs
const getMockedProfileData = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId === "12") {
      resolve([
        {
          data: {
            userId: 12,
            sessions: [
              {
                day: "2020-07-01",
                kilogram: 80,
                calories: 240,
              },
              {
                day: "2020-07-02",
                kilogram: 80,
                calories: 220,
              },
              {
                day: "2020-07-03",
                kilogram: 81,
                calories: 280,
              },
              {
                day: "2020-07-04",
                kilogram: 81,
                calories: 290,
              },
              {
                day: "2020-07-05",
                kilogram: 80,
                calories: 160,
              },
              {
                day: "2020-07-06",
                kilogram: 78,
                calories: 162,
              },
              {
                day: "2020-07-07",
                kilogram: 76,
                calories: 390,
              },
            ],
          },
        },
        {
          data: {
            userId: 12,
            sessions: [
              {
                day: 1,
                sessionLength: 30,
              },
              {
                day: 2,
                sessionLength: 23,
              },
              {
                day: 3,
                sessionLength: 45,
              },
              {
                day: 4,
                sessionLength: 50,
              },
              {
                day: 5,
                sessionLength: 0,
              },
              {
                day: 6,
                sessionLength: 0,
              },
              {
                day: 7,
                sessionLength: 60,
              },
            ],
          },
        },
        {
          data: {
            userId: 12,
            kind: {
              1: "cardio",
              2: "energy",
              3: "endurance",
              4: "strength",
              5: "speed",
              6: "intensity",
            },
            data: [
              {
                value: 80,
                kind: 1,
              },
              {
                value: 120,
                kind: 2,
              },
              {
                value: 140,
                kind: 3,
              },
              {
                value: 50,
                kind: 4,
              },
              {
                value: 200,
                kind: 5,
              },
              {
                value: 90,
                kind: 6,
              },
            ],
          },
        },
      ]);
    } else if (userId === "18") {
      resolve([
        {
          data: {
            userId: 18,
            sessions: [
              {
                day: "2020-07-01",
                kilogram: 70,
                calories: 240,
              },
              {
                day: "2020-07-02",
                kilogram: 69,
                calories: 220,
              },
              {
                day: "2020-07-03",
                kilogram: 70,
                calories: 280,
              },
              {
                day: "2020-07-04",
                kilogram: 70,
                calories: 500,
              },
              {
                day: "2020-07-05",
                kilogram: 69,
                calories: 160,
              },
              {
                day: "2020-07-06",
                kilogram: 69,
                calories: 162,
              },
              {
                day: "2020-07-07",
                kilogram: 69,
                calories: 390,
              },
            ],
          },
        },
        {
          data: {
            userId: 18,
            sessions: [
              {
                day: 1,
                sessionLength: 30,
              },
              {
                day: 2,
                sessionLength: 40,
              },
              {
                day: 3,
                sessionLength: 50,
              },
              {
                day: 4,
                sessionLength: 30,
              },
              {
                day: 5,
                sessionLength: 30,
              },
              {
                day: 6,
                sessionLength: 50,
              },
              {
                day: 7,
                sessionLength: 50,
              },
            ],
          },
        },
        {
          data: {
            userId: 18,
            kind: {
              1: "cardio",
              2: "energy",
              3: "endurance",
              4: "strength",
              5: "speed",
              6: "intensity",
            },
            data: [
              {
                value: 200,
                kind: 1,
              },
              {
                value: 240,
                kind: 2,
              },
              {
                value: 80,
                kind: 3,
              },
              {
                value: 80,
                kind: 4,
              },
              {
                value: 220,
                kind: 5,
              },
              {
                value: 110,
                kind: 6,
              },
            ],
          },
        },
      ]);
    } else {
      reject(new Error("Invalid user ID"));
    }
  });
};

const router = createRouter();
export default router;
