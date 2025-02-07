import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="m-5">
        <img className="rounded-2xl" alt="profile" src="https://avatars.githubusercontent.com/u/192697405?v=4"/>
      </div>
      <div className="border-2 m-4 rounded-2xl">
        <div className="w-[400px] h-auto">
          <h1>About Me:</h1>
          <p className="m-2 text-lime-400 font-serif font-bold">
          I’m Badavath Nagaraju, a passionate Full Stack Developer and Software Development Engineer SDE with a solid foundation in both frontend and backend technologies. 
          Currently in my 3rd year of B.Tech in Computer Science Engineering, I have a deep interest in solving complex problems and building impactful software solutions. 
          I thrive on learning new technologies, working on challenging projects, and optimizing user experiences.
          </p>
          <p className="m-2  text-lime-400 font-serif font-bold">
          When I’m not coding, I’m actively sharing knowledge on my YouTube channel "Tech Talks," where I explore tech topics and tutorials. 
          I’m always looking for opportunities to collaborate on innovative projects and continue growing as a developer in a fast-paced, ever-evolving field.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
