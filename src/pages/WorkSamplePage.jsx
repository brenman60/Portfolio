import "../styles/workSamplePage.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";

const WorkSamplePage = () => {
  const location = useLocation();
  const workSample = location.state;

  return (
    <motion.div
      key="work-sample"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
    >
      <Hero title={workSample.name} image={workSample.gallery[0]} />
    </motion.div>
  )
}

export default WorkSamplePage
