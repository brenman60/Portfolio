import { useState } from "react";
import CertificationsList from "../components/CertificationsList";
import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import CertificationPage from "../components/CertificationPage";

const ResumeAndCerts = () => {
  document.title = "Resume & Certifications";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("data/certifications.json")
    .then(response => response.json())
    .then(jsonData => setData(jsonData))
    .catch(error => console.error("Error loading JSON: ", error));
  }, []);

  if (!data) {
    return <motion.div></motion.div>
  }

  return (
    <motion.div
      key="resume-and-certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
    >
      <Hero title="Resume & Certifications" />
      <PageDivider height="4px" width="80%" opacity="0.5" />

      {Object.entries(data).map(([key, value]) => (
        <CertificationsList key={key} title={key} certifications={value} />
      ))}

      <CertificationPage />
    </motion.div>
  );
};

export default ResumeAndCerts;
