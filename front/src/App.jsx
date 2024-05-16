import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import "./styles.css";

// App est le composant racine de l'application
function App() {
  return <RouterProvider router={router} />;
}

export default App;
