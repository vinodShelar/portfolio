import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <span className={styles.sectionSubText} style={{color:"white", textDecoration:"underline"}}>Contat Details</span>


        <p label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Email : er.shelarvinod7757@gmail.com</span>
        </p>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Contact No : +917757982992</span>
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Current Address : Hasbanis Bhakal, Shaniwar Peth, Pune, Maharashtra India, 411030</span>

        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Permanent Address : Chandanpuri, Tal Malegaon Nashik, Maharashtra India, 423212</span>
        </label>



      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
