import "../styles/workSamplePage.css";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { TagsContext } from "../components/TagsProvider";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import PageDivider from "../components/PageDivider";
import Link from "../components/Link";

const WorkSamplePage = () => {
  const { id } = useParams();
  const [workSample, setWorkSample] = useState(null);
  const { getTagNames } = useContext(TagsContext);

  useEffect(() => {
    fetch("../data/workSamples.json")
    .then(response => response.json())
    .then(jsonData => setWorkSample(jsonData[id]))
    .catch(error => console.error("Error loading JSON: ", error));
  }, [id]);

  if (!workSample) {
    return <motion.div></motion.div>
  }

  return (
    <motion.div
      key="work-sample"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1, ease: "anticipate" }}
    >
      <Hero title={workSample.name} subtitle={
        <>
          {workSample.status} <br /> {workSample.time}
        </>
      } image={workSample.banner} height={400} />
      <PageDivider height="4px" width="80%" opacity="0.5" />
      <div id="workSampleContainer">
        <div id="workSampleColumn1">
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
          <PageDivider height="4px" width="80%" opacity="0.5" bottomMargin={25} />
          <p className="workSectionTitle">{`Role: ${workSample.role}`}</p>
          <PageDivider height="4px" width="80%" opacity="0.5" topMargin={25} />
          <ul id="workSampleLinks">
            {workSample.links.map((item, index) => (
              <li key={index} className="workSampleLink">
                <Link linkType={item.name} link={item.link} />
              </li>
            ))}
          </ul>
        </div>

        <div id="workSampleColumn2">
            <ul id="workPicturesList">
              {workSample.pictures.map((picture, index) => (
                <div key={index} className="workPictureContainer">
                  <div className="workPicture">
                    <img src={picture.link} alt={picture.caption} className="workPicturePic" />
                    <img src="/portfolio/images/icons/zoom.png" className="workPictureZoom" />
                  </div>
                  <p className="workPictureCaption">{picture.caption}</p>
                </div>
              ))}
            </ul>
        </div>
      </div>
    </motion.div>
  )
};

export default WorkSamplePage;
