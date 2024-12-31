import Hero from "../components/Hero";
import PageDivider from "../components/PageDivider";
import { motion } from "framer-motion";

const NotFound = () => {
  document.title = "404 Not Found";
  return (
    <motion.div
      key="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
    >
      <Hero title="404 Not Found" />
      <PageDivider height="4px" width="80%" opacity="0.5" />
    </motion.div>
  );
};

export default NotFound;
