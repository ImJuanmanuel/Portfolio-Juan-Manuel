import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {

  

  return (
    <>
      <div className={`text-center flex justify-center mb-20 ${styles.heroHeadText}`}>
        <h1>Technologies</h1>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (

          <div className='w-28 h-28' key={technology.name}>
            <h1 className={`text-center ${styles.sectionSubText} text-white`}>{technology.name}</h1>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      

    </>
  )
}

export default SectionWrapper(Tech, "")