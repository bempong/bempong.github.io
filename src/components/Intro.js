import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import '../index.css';

function Intro() {
  return (
    <div className="Intro min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-left">
        <h1 className="text-2xl font-lg mb-4">
          andrew bempong <span role="img" aria-label="laptop emoji">👨🏿‍💻</span>
        </h1>
        <p id="about" className="text-4xl font-lg mb-3 mt-8">
          <span className="moving-gradient h">h</span>
          <span className="moving-gradient e">e</span>
          <span className="moving-gradient y">y</span>
          <span className="moving-gradient exclamation">!</span>
        </p>
        
        <p className="text-lg mb-6">
          I’m a computer science major / music minor @ Stanford University. I’ve been enamored with technology, art, and everything in-between ever since I can remember. Particularly interested in leveraging engineering principles to augment modern media, communications, and audio. Digital Audio, Speech/NLP, Personalization, and Recommendation systems all pique my interest (as well as their industry applications).
        </p>
        <p className="text-lg mb-6">Currently in pursuit of becoming <a href="https://artful.design/stuff/samples/pi.pdf" className="text-blue-500 hover:underline">pi-shaped</a>.</p>
        <p className="text-lg mb-6">
          If I’m not building, I’m probably playing the guitar, running, or traveling.
        </p>
        <p className="text-lg mb-6 flex items-center">
          Don’t be a stranger!
          <a href="mailto:bempong@stanford.edu" className="flex items-center hover:underline ml-2">
            <FaEnvelope className="mr-1" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-bempong" className="flex items-center hover:underline mx-2">
            <FaLinkedin className="mr-1" /> 
          </a>
          <a href="https://github.com/bempong" className="flex items-center hover:underline">
            <FaGithub className="mr-1" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Intro;
