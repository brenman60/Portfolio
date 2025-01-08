import { useContext, useEffect } from "react";
import "../styles/workSample.css";
import { TagsContext } from "./TagsProvider";
import { useState } from "react";
import Tag from "./Tag";
import { useNavigate } from 'react-router-dom';

const WorkSample = ({
  sample
}) => {
  const navigate = useNavigate();
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
    }, {
      rootMargin: "-50px 0px -50px 0px",
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const changeImage = (direction) => {
    var currentIndex = sample.gallery.indexOf(image);
    
    if (direction == "left") {
      currentIndex--;
      if (currentIndex == -1) {
        currentIndex = sample.gallery.length - 1;
      }
    } else {
      currentIndex++;
      if (currentIndex == sample.gallery.length) {
        currentIndex = 0;
      }
    }

    setImage(sample.gallery[currentIndex]);
  };

  return (
    <div id={sample.name} className={`workSample ${isVisible ? "open" : "closed"}`}>
      <div className="workOrganization">
        <p className="workCategory">{sample.category}</p>
        <p className={`workStatus ${sample.status.toString().toLowerCase()}`}>{sample.status}</p>
      </div>
      <div className="workGallery">
        <button className="workGalleryLeft" onClick={() => changeImage("left")}>{"<"}</button>
        <img className="workGalleryImage" src={image} />
        <button className="workGalleryRight" onClick={() => changeImage("right")}>{">"}</button>
      </div>
      <h1 className="workName">{sample.name}</h1>
      <a className="workLearnMore" onClick={() => navigate("/portfolio/workSample", { state: sample })}>Learn More</a>
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
