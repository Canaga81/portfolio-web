"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* col-span 8 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins mb-4 text-white font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100">Hello I am</span>
            <div ></div>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Javascript",
                1000,
                "React JS",
                1000,
                "Next JS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

        </motion.div>

        {/* col-span 4 */}
      </div>
    </section>
  );
};

export default Hero;