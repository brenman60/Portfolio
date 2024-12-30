import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const AwardsAndSkills = () => {
  document.title = "Awards & Skills";
  return (
    <div>
      <Hero title="Awards & Skills" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default AwardsAndSkills;
