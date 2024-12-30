import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { colorScheme } from "../App";

const Contact = () => {
  document.title = "Contact";
  return (
    <div>
      <Hero title="Contact" />
      <PageDivider height="4px" width="80%" color={colorScheme.LightColor2} opacity="0.5" />
    </div>
  );
};

export default Contact;
