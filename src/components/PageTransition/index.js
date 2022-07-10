import { motion } from "framer-motion";

import "./index.css";

const animationConfiguration = {
  initial: { opacity: 0 },
  transition: { duration: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page-transition"
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
