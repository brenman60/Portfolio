import "../styles/workSamplePage.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import { TagsContext } from "../components/TagsProvider";
import { useContext, useState } from "react";
import Tag from "../components/Tag";
import PageDivider from "../components/PageDivider";

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
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
    >
      <Hero title={workSample.name} subtitle={workSample.status} image={workSample.banner} height={500} />
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <p id="workDescription">{workSample.description}</p>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <ul className="workTags">
        {getTagNames(workSample.tags).map((tag, index) => {
          return(
            <li key={index}>
              <Tag tag={tag} />
            </li>
          );
        })}
      </ul>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <p id="workRole">{workSample.role}</p>
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <div className="workPicturesContainer">
        <h1 className="workPicturesTitle">Media</h1>
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
