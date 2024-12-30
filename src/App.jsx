import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ResumeAndCerts from "./pages/ResumeAndCerts";
import AwardsAndSkills from "./pages/AwardsAndSkills";
import WorkSamples from "./pages/WorkSamples";
import NotFound from "./pages/NotFound";

export const colorScheme = {
  PrimaryColor: "#f6f7eb",
  SecondaryColor: "#393e41",
  AccentColor: "#38c544",
  LightColor: "#bcdfc4",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/resume" element={<ResumeAndCerts />} />
      <Route path="/awards" element={<AwardsAndSkills />} />
      <Route path="/workSamples" element={<WorkSamples />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/portfolio" }
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
