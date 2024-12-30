import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const ResumeAndCerts = () => {
  document.title = "Resume & Certifications";
  return (
    <div>
      <Hero title="Resume & Certifications" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default ResumeAndCerts;
