import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Frontend Developer at AnakKost',
        period: 'December 2024 - Present',
        description: 'Developing user-friendly interfaces for the AnakKost website using React and Tailwind CSS, focusing on boarding house listings and user accessibility.',
      },
      {
        company: 'Fullstack Website Development Cohort Member at Vocasia',
        period: 'September 2024 - December 2024',
        description: 'Completed intensive training in MERN stack development, mastering React, Node.js, Express, and MongoDB through hands-on projects and collaborative learning.',
      },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto' id='experience'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 text-md mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience