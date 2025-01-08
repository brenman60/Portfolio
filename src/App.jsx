import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import AwardsAndSkills from "./pages/AwardsAndSkills";
import WorkSamples from "./pages/WorkSamples";
import WorkSamplePage from "./pages/WorkSamplePage";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import { TagsProvider } from "./components/TagsProvider";

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
        path: "certifications",
        element: <Certifications />,
      },
      {
        path: "resume",
        element: <Resume />,
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
        path: "workSample",
        element: <WorkSamplePage />,
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
  return ( 
    <TagsProvider>
      <RouterProvider router={router} />
    </TagsProvider>
  );
};

export default App;
