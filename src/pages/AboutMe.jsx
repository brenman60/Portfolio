import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import Dropdown from "../components/Dropdown";
import { motion } from "framer-motion";

const AboutMe = () => {
  document.title = "About Me";
  return (
    <motion.div
      key="about-me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
    >
      <Hero title="About Me" />
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <Dropdown label={"Test Label"}>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
      </Dropdown>
    </motion.div>
  );
};

export default AboutMe;
