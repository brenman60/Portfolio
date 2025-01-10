import "../styles/workSamplePage.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import { TagsContext } from "../components/TagsProvider";
import { useContext, useState } from "react";
import Tag from "../components/Tag";
import PageDivider from "../components/PageDivider";
import Link from "../components/Link";

const WorkSamplePage = () => {
  const location = useLocation();
  const workSample = location.state;
  const { getTagNames } = useContext(TagsContext);
  const [image, setImage] = useState(workSample.pictures[0]);

  const changeImage = (direction) => {
    var currentIndex = workSample.pictures.indexOf(image);
    
    if (direction == "left") {
      currentIndex--;
      if (currentIndex == -1) {
        currentIndex = workSample.pictures.length - 1;
      }
    } else {
      currentIndex++;
      if (currentIndex == workSample.pictures.length) {
        currentIndex = 0;
      }
    }

    setImage(workSample.pictures[currentIndex]);
  };

  return (
    <motion.div
      key="work-sample"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1, ease: "anticipate" }}
    >
      <Hero title={workSample.name} subtitle={workSample.status} image={workSample.banner} height={400} />
      <ul id="workSampleLinks">
        {workSample.links.map((item, index) => (
          <li key={index} className="workSampleLink">
            <Link linkType={item.name} link={item.link} />
          </li>
        ))}
      </ul>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <h1 className="workSectionTitle">Description</h1>
      <p id="workDescription">{workSample.description}</p>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <h1 className="workSectionTitle">Relevant Skills</h1>
      <ul id="workSampleTags">
        {getTagNames(workSample.tags).map((tag, index) => {
          return(
            <li key={index}>
              <Tag tag={tag} />
            </li>
          );
        })}
      </ul>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <p id="workRole">{`Role: ${workSample.role}`}</p>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <div className="workPicturesContainer">
        <h1 className="workSectionTitle">Media</h1>
        <div className="workPictures">
          <button className="workPicturesLeft" onClick={() => changeImage("left")}>{"<"}</button>
          <img className="workPicturesImage" src={image.link} />
          <button className="workPicturesRight" onClick={() => changeImage("right")}>{">"}</button>
        </div>
      </div>
      <PageDivider height="4px" width="80%" opacity="0.5" />
    </motion.div>
  )
}

export default WorkSamplePage
