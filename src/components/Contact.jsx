import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center mb-10">
            <div>
                <div className="text-gray-300">
                <h3 className="text-2xl font-semibold mb-3">About <span className="text-indigo-600">Me</span></h3>
                  <div className="text-justify w-12/12">
                    <p className="text-base"> 
                      Hi, my name is <span className="font-bold text-indigo-600">Amaliyah</span>, a passionate <span className="font-semibold text-green-500">Frontend Developer</span> focused on building clean and user-friendly web interfaces.
                    </p>
                    <p className="text-base mt-2">
                      Currently pursuing a degree in <span className="font-semibold text-purple-500">Information Systems</span>, I have experience with <span className="font-semibold text-orange-500">React</span>, <span className="font-semibold text-orange-500">Tailwind CSS</span>, and the <span className="font-semibold text-orange-500">MERN stack</span> from projects like <span className="font-bold text-red-500">AnakKost</span>.
                    </p>
                  </div>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div>

                </div>

            </div>

            <form
                action="https://getform.io/f/placeYourEndpointHere"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact