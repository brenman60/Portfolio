import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { motion } from "framer-motion";
import { TagsContext } from "../components/TagsProvider";
import { useContext } from "react";
import Tag from "../components/Tag";
import "../styles/aboutMe.css";

const AboutMe = () => {
  document.title = "About Me";

  const topSkills = [67, 45, 22, 73, 64, 26];
  const { getTagNames } = useContext(TagsContext);

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
      <div id="aboutMeContainer">
        <div id="aboutMeColumn1">
          <h1 id="aboutDescriptionTitle">Brennan Kunicki</h1>
          <p id="aboutDescription">
          Student at Greater Lowell Technical High School, in the Information Technology program. My core interests are web development, software development, and game development. I can adequately develop programs in C#, Python, Visual Basic, and React. I am currently pursuing jobs within my fields of interest.
          </p>
          <h1 id="topSkillsTitle">Top Skills</h1>
          <ul id="topSkills">
            {getTagNames(topSkills).map((tag, index) => {
              return(
                <li key={index} className="topSkill">
                  <Tag tag={tag} />
                </li>
              );
            })}
          </ul>
        </div>
        <div id="aboutMeColumn2">
          <img id="mainPhoto" src="/portfolio/images/Photo.jpg" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
