import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ResumeAndCerts from "./pages/ResumeAndCerts";
import AwardsAndSkills from "./pages/AwardsAndSkills";
import WorkSamples from "./pages/WorkSamples";
import NotFound from "./pages/NotFound";

export const colorScheme = {
  background1: "#1E1E1E",
  background2: "#2B2B2B",
  heading: "#007ACC",
  highlight: "#FF6F00",
  text: "#EDEDED",
}

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: (
      <>
        <Navbar />
        <MainLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "resume",
        element: <ResumeAndCerts />,
      },
      {
        path: "awards",
        element: <AwardsAndSkills />,
      },
      {
        path: "workSamples",
        element: <WorkSamples />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
