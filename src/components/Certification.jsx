import { useContext } from "react";
import "../styles/certification.css";
import Tag from "./Tag";
import { TagsContext } from "./TagsProvider";

const Certification = ({
    certData
}) => {

  const { getTagNames } = useContext(TagsContext);

  return (
    <a className="certContent" href={certData.link} target="_blank" >
        <img src={certData.image} className="certImage" />
        <h1 className="certName">{certData.name}</h1>
        <ul className="certSkills">
          {getTagNames(certData.skills).map((tag, index) => {
            console.log(tag);
            return(
              <li key={index}>
                <Tag tag={tag} />
              </li>
            );
          })}
        </ul>
    </a>
  )
};

export default Certification;