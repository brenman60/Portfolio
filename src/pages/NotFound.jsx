import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const NotFound = () => {
  document.title = "404 Not Found";
  return (
    <div>
      <Hero title="404 Not Found" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default NotFound;
