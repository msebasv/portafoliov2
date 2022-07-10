import React from "react";

import { motion } from "framer-motion";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import "./index.css";

const SocialMedia = () => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="container-social"
    >
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a href="https://github.com/msebasv" target="blank">
          <BsGithub className="github" />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <BsTwitter className="twitter" />
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a href="https://www.linkedin.com/in/msebasv/" target="blank">
          <FaLinkedinIn className="linkedin" />
        </a>
      </motion.div>
      <motion.div
        className="line-contact"
        initial={{
          height: 0,
        }}
        animate={{
          height: "3rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </motion.div>
  );
};

export default SocialMedia;
