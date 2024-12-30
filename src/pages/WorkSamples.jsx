import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const WorkSamples = () => {
  document.title = "Work Samples";
  return (
    <div>
      <Hero title="Work Samples" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default WorkSamples;
