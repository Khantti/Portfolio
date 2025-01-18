import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {linkedin,github} from '../assets'
import {fadeIn, textVariant} from '../utils/motion'
import { text, title } from 'framer-motion/client'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt="icon" className='w-16 h-1/6 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-justify text-[17px] max-w-7xl leading-[30px]'
      >
        I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React, and hands-on experience with frameworks like Bootstrap, jQuery and etc. I specialize in creating responsive, intuitive, and visually appealing web interfaces that enhance user experience.

        With a strong background in IoT systems and web-based SCADA control, I excel at combining frontend technologies with backend services like PHP, Nodejs, MySQL and MongoDb to deliver scalable and impactful solutions. I'm a quick learner and thrive in collaborative environments, working closely with clients to turn ideas into reality through clean, maintainable, and efficient code.

        Let’s build something great together!
      </motion.p>

      <div className="mt-3 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* <!-- Resume Buttons --> */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/khanttinyane_webdeveloper_2025.pdf"
            download
            className="inline-block px-6 py-3 bg-[#915eff] text-white font-medium text-[16px] rounded-md shadow-md hover:bg-[#814efb] transition-all cursor-pointer"
          >
            Download Resume
          </a>
          <a
            href="/khanttinyane_webdeveloper_2025.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-[#915eff] text-white font-medium text-[16px] rounded-md shadow-md hover:bg-[#814efb] transition-all cursor-pointer"
          >
            View Resume
          </a>
        </div>

        {/* <!-- Social Links --> */}
        <div>
          <ul className="flex gap-3 justify-center">
            <li>
              <a
                href="https://www.linkedin.com/in/khant-ti-nyane-3018672b6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-8 h-8 rounded-xl object-contain"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Khantti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-8 h-8 rounded-xl object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")