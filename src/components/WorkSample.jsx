import { useContext, useEffect } from "react";
import "../styles/workSample.css";
import { TagsContext } from "./TagsProvider";
import { useState } from "react";
import Tag from "./Tag";

const WorkSample = ({
  sample
}) => {
  const { getTagNames } = useContext(TagsContext);

  const [image, setImage] = useState(sample.gallery[0]);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(sample.name);
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id={sample.name} className={`workSample ${isVisible ? "open" : "closed"}`}>
      <div className="workOrganization">
        <p className="workCategory">{sample.category}</p>
        <p className={`workStatus ${sample.status.toString().toLowerCase()}`}>{sample.status}</p>
      </div>
      <div className="workGallery">
        <a className="workGalleryLeft">{"<"}</a>
        <img className="workGalleryImage" src={image} />
        <a className="workGalleryRight">{">"}</a>
      </div>
      <h1 className="workName">{sample.name}</h1>
      <a className="workLearnMore">Learn More</a>
      <ul className="workTags">
          {getTagNames(sample.tags).map((tag, index) => {
            return(
              <li key={index}>
                <Tag tag={tag} />
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default WorkSample
