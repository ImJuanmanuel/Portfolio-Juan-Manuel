import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-3xl md:w-[500px] w-full   cursor-pointer"
      >

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'

          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open
                (source_code_link)}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'

            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3
            className='text-white font-bold text-2xl py-2'
          >{name}</h3>
          <p
            className='text-secondary text-lg'
          >{description}</p>
        </div>

        <div className='p-4'>
          
          <button href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 w-full  uppercase pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group " onClick={() => window.open(website_link)}>
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-800 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Visit WebSite</span>
          </button>
        </div>


        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (

            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>

          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Projects
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-lg max-w-3xl lead'
        >
          Following the next projects showcases my skills and little
          expierence throught as a IT Student. Each Projects is briefly
          described with links to code repositories and live demos in it.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project}
          />
        ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
/* export default Works  */