import "../styles/workSamplePage.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
      {workSample.name}
    </motion.div>
  )
}

export default WorkSamplePage
