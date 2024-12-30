import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const HomePage = () => {
  document.title = "Home";
  return (
    <div>
      <Hero title="Home Page" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default HomePage;
