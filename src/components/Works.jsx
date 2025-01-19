import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {  link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants/constants';
import { fadeIn,textVariant } from '../utils/motion';


const ProjectorCard = ({index,name,description, tags,image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5, 0.75)}> 
      <div
      onClick={() => window.open(source_code_link,"_blank")}
      className='cursor-pointer rounded-2xl'
      
      >
      <Tilt
        className='bg-tertiary p-5 sm:w-[360px] w-full rounded-2xl'
        options={{
          max:45,
          scale:1,
          speed:450
        }}
      > 
      <div className='relative w-full h-[230px]'>
        <img 
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'
         />
     
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) =>(
            <p key= {tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
      </div>

      </Tilt>
      </div>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17x] max-w-3xl leading-[30px]'
        >
I've worked on a variety of projects ranging from fullstack web apps to running an entire organization. I'm always looking for new projects to work on, so feel free to reach out if you have any ideas or projects you'd like to collaborate on!
        </motion.p>
      </div>

      <div className='mt-20 justify-center flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
          <ProjectorCard
           key={`project-${index}`}
           index = {index}
           {...project}
           />

        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work")
