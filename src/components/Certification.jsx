import "../styles/certification.css";
import Skill from "./Skill";

const Certification = ({
    certData
}) => {
  return (
    <a className="certContent" href={certData.link} target="_blank" >
        <img src={certData.image} className="certImage" />
        <h1 className="certName">{certData.name}</h1>
        <ul className="certSkills">
          {certData.skills.map((skill, index) => {
            return(
              <li key={index}>
                <Skill skill={skill} />
              </li>
            );
          })}
        </ul>
    </a>
  )
};

export default Certification;