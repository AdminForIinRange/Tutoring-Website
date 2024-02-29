import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Auth from "../pages/Auth/Auth.jsx";


export default function RootLayout() {
  return (
    <div className="Layout">
      <Navbar />
      

      <Outlet />
    </div>
  );
}
