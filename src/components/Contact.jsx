import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
      <div className="grid md:grid-cols-2 place-items-center gap-10 p-4">
  {/* About Me Section */}
  <div className="grid grid-rows-2 place-items-center p-4 rounded-lg">
    {/* About Me Content */}
    <div className="text-gray-300 w-full">
      <h3 className="text-2xl font-semibold mb-3">
        About <span className="text-purple-600">Me</span>
      </h3>
      <div className="text-justify">
        <p className="text-base">
          Hi, my name is <span className="font-bold text-purple-600">Amaliyah</span>, a passionate <span className="font-semibold text-green-500">Frontend Developer</span> focused on building clean and user-friendly web interfaces.
        </p>
        <p className="text-base mt-2">
          I am currently in my 6th semester pursuing a Bachelor's degree in <span className="font-bold text-red-400">Information Systems</span> at the <span className="font-bold text-orange-600">University of Singaperbangsa Karawang</span>. I specialize in <span className="font-bold text-blue-500">the MERN stack</span>, with experience in projects such as AnakKost.
        </p>
      </div>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      <div className="bg-gray-800/40 p-4 rounded-lg text-left">
        <h3 className="text-4xl font-semibold text-white">5<span>+</span></h3>
        <p className="text-lg text-gray-300">Website Projects</p>
      </div>
      <div className="bg-gray-800/40 p-4 rounded-lg text-left">
        <h3 className="text-4xl font-semibold text-white">2<span>+</span></h3>
        <p className="text-lg text-gray-300">Learning Years</p>
      </div>
      <div className="bg-gray-800/40 p-4 rounded-lg text-left">
        <h3 className="text-4xl font-semibold text-white">10<span>+</span></h3>
        <p className="text-lg text-gray-300">Successful Teamwork</p>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <form
    action="https://getform.io/f/bjjjwwob"
    method="POST"
    className="max-w-xl w-fullp-5 rounded-lg shadow-lg mb-8"
    id="form"
  >
    <p className="text-gray-100 font-bold text-xl mb-4">
      Let´s connect!
    </p>
    <input
      type="text"
      id="name"
      placeholder="Your Name ..."
      name="name"
      className="mb-4 w-full rounded-md border border-purple-600 py-2 px-4"
    />
    <input
      type="email"
      id="email"
      placeholder="Your Email ..."
      name="email"
      className="mb-4 w-full rounded-md border border-purple-600 py-2 px-4"
    />
    <textarea
      name="textarea"
      id="textarea"
      cols="30"
      rows="4"
      placeholder="Your Message ..."
      className="mb-4 w-full rounded-md border border-purple-600 py-2 px-4"
    />
    <button
      type="submit"
      className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition duration-300"
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