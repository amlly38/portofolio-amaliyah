import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "AnakKost",
      description: "A MERN stack-based website to help users easily find boarding houses with real-time updates and user-friendly design. Features include a responsive layout, search filters, and seamless navigation.",
      links: {
        site: "https://anakkost.vocasia-fsjs-c.fun/",
        github: "https://github.com/Fizm00/Project-Vocasia/",
      },
    },
    {
      img: project2,
      title: "Voca Task Management",
      description: "A task management web application built with Node.js, Express.js, and MongoDB. It features secure JWT authentication, CRUD functionality, and a responsive design for efficient task management.",
      links: {
        github: "https://github.com/amlly38/tugas-week10-fullstack-vocaTaskManager",
      },
    },
    {
      img: project3,
      title: "VocFilm",
      description: "A movie review platform that allows users to search and explore movies. Built with HTML, CSS, and JavaScript, featuring real-time search functionality, a clean UI, and mobile optimization.",
      links: {
        github: "https://github.com/amlly38/Voca-Film",
      },
    },
    {
      img: project4,
      title: "Ruang Jurnal",
      description: "A PHP-based web application for managing journal entries with full CRUD functionality. Features include easy journal creation, editing, deletion, and user authentication.",
      links: {
        github: "https://github.com/amlly38/ruang-jurnal",
      },
    },
  ];


const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub className='w-6 h-6'/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio