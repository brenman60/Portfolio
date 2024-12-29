import { colorScheme } from "../App";
import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";

const ResumeAndCerts = () => {
  document.title = "Resume & Certifications";
  return (
    <div>
      <Hero title="Resume & Certifications" />
      <PageDivider height={50} color={colorScheme.SecondaryColor} />
    </div>
  );
};

export default ResumeAndCerts;
