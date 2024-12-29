import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/universal.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout;
