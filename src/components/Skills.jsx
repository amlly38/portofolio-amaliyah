import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiMysql,
} from "react-icons/di"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiAxios, SiPostman, SiPhp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-400' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'Chakra UI', icon: <SiChakraui className='text-green-400' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Axios', icon: <SiAxios className='text-indigo-600' /> },
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'Express', icon: <SiExpress className='text-gray-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'Postman', icon: <SiPostman className='text-red-500' /> },
        { name: 'PHP', icon: <SiPhp className='text-purple-600' /> },
        { name: 'MySQL', icon: <DiMysql className='text-blue-700' /> },
        { name: 'Git', icon: <FaGitAlt className='text-red-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-100' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            Experienced in frontend development with HTML, CSS, and JavaScript, as well as building fullstack applications using the MERN stack.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
