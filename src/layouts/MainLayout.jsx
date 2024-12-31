import { Outlet } from "react-router-dom";
import "../styles/universal.css";

import { AnimatePresence } from "framer-motion";

const MainLayout = () => {  
  return (
    <AnimatePresence>
      <Outlet />
    </AnimatePresence>
  )
}

export default MainLayout;
