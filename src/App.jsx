// Import our CSS file
import React from 'react';
import "./App.css"

// Main App component
function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Raghav Kaushal</h1>
          {/* Navigation Menu */}
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* About Section with Photo */}
        <section id="about" className="about-section">
          <div className="about-content">
            <h2>Hello, I'm Raghav</h2>
            <p>
              A passionate developer with expertise in React, HTML, CSS, Python, Next.js and JavaScript. I build modern
              web applications with a focus on performance and user experience.
            </p>
            {/* Contact Buttons */}
            <div className="button-group">
              <button className="button primary-button">Contact Me</button>
              <button className="button secondary-button">LinkedIn</button>
            </div>
          </div>
          {/* Profile Photo */}
          <div className="profile-photo">
            <img src="https://via.placeholder.com/256" alt="Raghav Kaushal" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>My Projects</h2>
          <div className="project-grid">
            {/* Map through projects array to create project cards */}
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <h3>{project.title}</h3>
                {/* Technologies used */}
                <div className="tech-badges">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {/* Map through skills array to create skill items */}
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Get In Touch</h2>
          <div className="contact-card">
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="button-group">
              <button className="button primary-button">Email Me</button>
              <button className="button secondary-button">GitHub</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Raghav Kaushal. All rights reserved.</p>
      </footer>
    </div>
  )
}

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout process.",
    image: "https://via.placeholder.com/384x192",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    codeLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
    image: "https://via.placeholder.com/384x192",
    technologies: ["React", "TypeScript", "Firebase"],
    codeLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://task-manager-demo.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts using data from multiple weather APIs.",
    image: "https://via.placeholder.com/384x192",
    technologies: ["JavaScript", "CSS", "Weather API"],
    codeLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-app-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern, responsive design.",
    image: "https://via.placeholder.com/384x192",
    technologies: ["React", "CSS", "JavaScript"],
    codeLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://portfolio-demo.vercel.app",
  },
]

// Sample skills data
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "𝐉𝐒" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Next.js", icon: "▲" },
]

// Export the App component
export default App
