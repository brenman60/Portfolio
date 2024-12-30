import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const AboutMe = () => {
  document.title = "About Me";
  return (
    <div>
      <Hero title="About Me" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default AboutMe;
