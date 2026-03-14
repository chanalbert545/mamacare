import React from 'react'
import './ProjectsPage.css'

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Book Donation Program',
      description: 'Providing age-appropriate books and reading materials to nursery schools to foster early literacy skills.',
      status: 'Active',
      progress: 75,
      icon: '📚',
      details: [
        'Donated 5,0+ books this year',
        'Reached 30+ nursery children',
        'Trained teachers on reading programs'
      ]
    },
    {
      id: 2,
      title: 'Teacher Training Initiative',
      description: 'Comprehensive training programs for early childhood educators to enhance teaching methodologies.',
      status: 'Active',
      progress: 60,
      icon: '👨‍🏫',
      details: [
        'Trained 3+ teachers',
        'Certified 3+ educators',
        'Monthly workshops ongoing'
      ]
    },
    {
      id: 3,
      title: 'Infrastructure Development',
      description: 'Building and renovating school facilities to create safe and conducive learning environments.',
      status: 'Active',
      progress: 45,
      icon: '🏗️',
      details: [
        'Renovated the school buildings',
        'Installed playground equipment',
        'Improved sanitation facilities'
      ]
    },
    {
      id: 4,
      title: 'Nutrition Program',
      description: 'Providing nutritious meals and snacks to children in partner nursery schools.',
      status: 'Active',
      progress: 80,
      icon: '🍎',
      details: [
        'Serving 20+ children daily',
        'Partnered with local suppliers',
        'Nutrition education included'
      ]
    },
    {
      id: 5,
      title: 'Digital Learning Resources',
      description: 'Introducing technology and digital learning tools to enhance educational experiences.',
      status: 'Planning',
      progress: 20,
      icon: '💻',
      details: [
        
        'Tablet kids teaching planned',
        'Educational apps to be introduced'
      ]
    },
    {
      id: 6,
      title: 'Community Outreach',
      description: 'Engaging with parents and communities to support children\'s education at home.',
      status: 'Active',
      progress: 55,
      icon: '🤝',
      details: [
        'Monthly parent workshops',
        'Community events organized',
        'Home learning support provided'
      ]
    }
  ]

  const getStatusClass = (status) => {
    return status === 'Active' ? 'status-active' : 'status-planning'
  }

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-subtitle">
          Discover the initiatives we're working on to support early childhood education
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className={`project-status ${getStatusClass(project.status)}`}>
                {project.status}
              </div>
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="project-details">
              <h3>Key Achievements:</h3>
              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="projects-cta">
        <div className="cta-content">
          <h2>Want to Support Our Projects?</h2>
          <p>Get in touch with us to learn how you can contribute to our initiatives</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage


