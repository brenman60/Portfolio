import "../styles/certification.css";
import { useCertificationContext } from "./CertificationContext";

const Certification = ({
    certData
}) => {
  const { setInfo } = useCertificationContext();

  return (
    <div className="certContent" onClick={() => setInfo(certData)}>
        <img src={certData.image} className="certImage" />
        <h1 className="certName">{certData.name}</h1>
    </div>
  )
};

export default Certification;