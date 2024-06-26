import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've worked on
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the projects I've worked on that I'm most proud of. They showcase my creativity and ability to overcome any obstacle I face. 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                  <div className="project-info">
                <div 
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 opacity-0 hover:opacity-100"
                  style={{ height: '350px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
