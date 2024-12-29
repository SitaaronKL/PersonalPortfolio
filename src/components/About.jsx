import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/constants';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring",0.5 * index, 0.75)}
        className={`w-full ${
          index===0 ? `vision-gradient`:
          index===1 ? `blue-red-gradient`:
          index===2 ? `peter-quill-gradient`:
          `dr-strange-gradient`
        } p-[1px] rounded-[20px] shadow-card`}
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img
        src={icon}
        alt={title}
        className={`object-contain ${
        index === 0 ? 'w-30 h-30' :
        index === 1 ? 'w-30 h-30' :
        index === 2 ? 'w-30 h-30' :
        index === 3 ? 'w-30 h-30': 'w-16 h-16'
        }`}
/>
        <h3 className='text0white text-[20px] font-bold text-center'>{title}</h3>
      </div>


      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who am I?</p>
        <h2 className={styles.sectionHeadText}>Who are you??</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]' 
      >
        Billionaire. Playboy. Genius. Philathropist. Okay okay fine, I'm just kidding. That's a hard question to answer but I would say that I'm a pretty good J.A.R.V.I.S. engineer, Fullstack Webhead, Guardian of the Roblox App Store, and Master of Multiversal Media! 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index = 
          {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")