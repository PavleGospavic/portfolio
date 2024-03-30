import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{ height: "500px" }}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "invert(90%)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Račanska+7,+Bijeljina,+Bosnia+and+Herzegovina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Račanska 7 <br />
                Bijeljina 76300, Bosnia and Herzegovina
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                pavle.gospavic@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+38766401273 +4367762463081</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font mb-4">
            <span role="img" aria-label="briefcase">💼 </span>
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            If you are looking for a driven and creative software engineer to join your team or collaborate on exciting projects, feel free to reach out to me. I'm open to new opportunities and passionate about creating.
          </p>
          
          <a 
            href="mailto:pavle.gospavic@gmail.com" 
            className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center justify-center"
            style={{height: "fit-content"}}
          >
            Contact me
          </a>
        </form>
      </div>
    </section>
  );
}