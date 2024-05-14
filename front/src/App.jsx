import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx"
import './styles.css';

function App() {
  return (
    <RouterProvider router={router} />
    //<div className="modale"></div> REGARDER REACT FRAGMENT
  );
}

export default App;
