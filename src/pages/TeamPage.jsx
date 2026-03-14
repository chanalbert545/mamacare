import React from 'react'
import { Link } from 'react-router-dom'
import './SitePages.css'
import stella from '../assets/stella.webp'
import angella from '../assets/angella.webp'

const team = [
  {
    name: 'Nabakka Brenda',
    role: ' Director',
    bio: '“Teaching kids to count is fine, but teaching kids what counts is best.”',
    avatar: '👩‍💼',
  },
  {
    name: 'Nankyondwa Angella',
    role: 'Teacher',
    bio: '"Desire to help children grow develop and learn, passion for teaching, I love children , willingness to work collaboratively.',
    image: angella,
  },
 
  {
    name: 'Angeyo Stella',
    role: 'Teacher',
    bio: '“Every child is a different kind of flower, and all together, they make this world a beautiful garden.',
    image: stella,
  },
]

const TeamPage = () => (
  <div className="standard-page team-page">
    <section className="page-hero">
      <div className="page-container page-hero-content">
        <h1>Our Team</h1>
        <div className="page-hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Team</span>
        </div>
        <p>Meet the dedicated educators and leaders behind MamaCare Nursery & Daycare.</p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={member.name} style={{ animationDelay: `${i * 0.12}s` }}>
            {member.image ? (
              <img src={member.image} alt={member.name} className="team-avatar team-img" />
            ) : (
              <div className="team-avatar" aria-hidden="true">
                {member.avatar}
              </div>
            )}
            <h3>{member.name}</h3>
            <div className="team-role">{member.role}</div>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="page-section">
      <div className="page-container highlight-banner">
        <h2>Become a Volunteer</h2>
        <p>
          Join our caring community of mentors and volunteers who make each day brighter for our children.
        </p>
        <div className="banner-actions">
          <Link to="/contact" className="primary">
            Get Involved
          </Link>
          <Link to="/donate" className="outline">
            Support Our Work
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default TeamPage
