
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './pages/signup';
import Login from './pages/login';
import Homepage from "./pages/homepage";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage/>),
  children:[
  {
    path: "signup",
    element:(<Signup/>),
  },
  {
    path: "login",
    element:(<Login/>),
  }
]}]

);




function App() {
  return (
  <div>
  <RouterProvider router={router} />
  </div>
  );
}

export default App;
