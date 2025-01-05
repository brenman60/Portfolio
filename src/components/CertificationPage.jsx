import { useEffect, useState } from "react";
import "../styles/certificationPage.css";
import { useCertificationContext } from "./CertificationContext";
import Skill from "./Skill";

const CertificationPage = () => {
  const { info, isOpen, setOpen } = useCertificationContext();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (info) {
        setTimeout(() => {
            setVisible(true);
        }, 10);
    }
  }, [info]);

  if (!info) {
    return <></>
  }

  return (
    <div className={`certificationPage ${isOpen && isVisible ? "open" : "closed"}`} style={{
        pointerEvents: isOpen ? "all" : "none",
    }}>
        <div>
            <button className="certPageArrow certPageLeft">{"<"}</button>
        </div>

        <div>
            <h1 className="certPageName">{info.name}</h1>
            <button className="certPageExit" onClick={() => setOpen(!isOpen)} >X</button>
            <img className="certPageCert" src={info.image} />
            <ul className="certPageSkills">
                {info.skills.map((skill, index) => {
                    return(
                    <li key={index}>
                        <Skill skill={skill} />
                    </li>
                    );
                })}
            </ul>
            <a className="certPageLink" href={info.link} target="_blank">Visit</a>
        </div>

        <div>
            <button className="certPageArrow certPageRight">{">"}</button>
        </div>
    </div>
  )
}

export default CertificationPage
