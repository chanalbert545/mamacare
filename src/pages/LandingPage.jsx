import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import dht from '../assets/dht.png'

const stats = [
  { value: '3+', label: 'classrooms' },
  { value: '20+', label: 'Children Helped' },
  { value: '4+', label: 'Teachers ' },
  { value: '10+', label: 'Active Projects' },
]

const features = [
  {
    icon: '📚',
    title: 'Educational Resources',
    text: 'Providing books, learning materials, and educational tools for nursery schools.',
  },
  {
    icon: '🏫',
    title: 'Infrastructure Support',
    text: 'Helping improve school facilities and create safe learning environments.',
  },
  {
    icon: '👨‍🏫',
    title: 'Teacher Training',
    text: 'Supporting professional development for early childhood educators.',
  },
  {
    icon: '💝',
    title: 'Community Outreach',
    text: 'Partnering with families and communities to uplift children together.',
  },
]

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <span className="hero-subtag">MamaCare Nursery & Daycare</span>
            <h1>Supporting Early Childhood Education</h1>
            <p>
              Empowering nursery schools and giving every child the best start in life through caring teachers,
              dynamic learning spaces, and community partnerships.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="hero-btn primary">
                Donate Now
              </Link>
              <Link to="/about" className="hero-btn outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={dht}
              alt="Teacher with pupils"
            />
          </div>
        </div>
      </section>

      <section className="landing-features">
        <div className="page-container">
          <div className="section-title">
            <span>How We Help</span>
            <h2>Nurturing young minds with love and care</h2>
            <p className="section-text">
              From classroom resources to community outreach, MamaCare ensures children have everything they need
              to thrive.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-stats">
        <div className="page-container stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage
