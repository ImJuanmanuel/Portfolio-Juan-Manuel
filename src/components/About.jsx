import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-1 rounded-3xl shadow-card'
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450

          }}
          className='bg-tertiary rounded-3xl py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt=""
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-2xl font-bold text-center w-'>{title}</h3>

        </div>



      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const handledownload = () => {
    const fileUrl = './pdf/CV_Juan_Manuel.pdf'
    window.open(fileUrl, '_blank')
  }
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-8'
      >
        I am a responsible and committed person, with values of loyalty, empathy, and perseverance. I am passionate about web development 
        and I am particularly drawn to the frontend aspect. I am open to new projects and eager to learn new technologies. I enjoy 
        challenging myself to become proficient in various frontend frameworks and tools. I excel in problem-solving through creative 
        solutions and effectively collaborating in a team. I constantly seek opportunities to grow both personally and professionally.
        I am prepared for new challenges and to contribute positively in any environment.
      </motion.p>

      <div
        className='mt-20 flex flex-wrap gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        <div className='mt-10'>
          <button href="#_" class="relative inline-flex items-center px-12 py-3 font-extrabold overflow-hidden text-lg  text-white border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50" onClick={handledownload}>
            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative">Download CV</span>
          </button>
        </div>
      </div>


    </>

  )
}

export default SectionWrapper(About, "about")