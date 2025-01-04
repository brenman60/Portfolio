import "../styles/certification.css";

const Certification = ({
    certData
}) => {
  

  return (
    <div className="certContent">
        <img src={certData.image} className="certImage" />
        <h1 className="certName">{certData.name}</h1>
    </div>
  )
};

export default Certification;