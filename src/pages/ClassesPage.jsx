import React from 'react'
import { Link } from 'react-router-dom'
import './classes.css'
import child from "../assets/child.webp"
import baby from "../assets/baby.webp"
import middle from "../assets/middle.jpg"
import top from "../assets/top.webp"

const classes = [
  {
    title: 'Baby Steps (2 - 3 yrs)',
    description: 'Gentle routines that promote sensory exploration, motor skills, and social bonding.',
    image: child,
    activities: [
      'Sensory play',
      'Music & movement',
      'Story time',
      'Outdoor walks',
      'Simple puzzles',
    ]
  },
  {
    title: 'Bright Explorers (3 - 4 yrs)',
    description: 'Hands-on activities that build language, numeracy, and creativity through play.',
    image: baby,
    activities: [
      'Building blocks',
      'Counting games',
      'Art & craft',
      'Role play',
      'Nature discovery',
    ]
  },
  {
    title: 'Future Stars (4 - 5 yrs)',
    description: 'Pre-primary readiness that strengthens confidence, collaboration, and critical thinking.',
    image: middle,
    activities: [
      'Letter & number fun',
      'Science experiments',
      'Team games',
      'Creative writing',
      'Show & tell',
    ]
  },
  {
    title: 'Top Class (4.5 - 6 Years)',
    description: 'The Nest class prepares children for primary school by introducing foundational academic concepts in an engaging and interactive manner. This class balances structured learning with creative play to ensure a smooth transition to formal education.',
    image: top,
    activities: [
      'Reading & phonics',
      'Math readiness',
      'Project work',
      'Public speaking',
      'Graduation prep',
    ]
  },
]

const ClassesPage = () => (
  <div className="standard-page">

    {/* SECTION 1 */}
    <section className="page-hero animate-section">
      <div className="page-container page-hero-content">
        <h1>Our Classes</h1>
        <div className="page-hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Classes</span>
        </div>
        <p>Age-appropriate learning paths designed to celebrate milestones and spark curiosity.</p>
      </div>
    </section>

    {/* SECTION 2 */}
    <section className="page-section classes-grid-section animate-section">
      <div className='cardgrid'>
        <div className="page-container card-grid">
          {classes.map((item, i) => (
            <div
              className="info-card-primary fade-in"
              key={item.title}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="card-img-wrap">
                <img src={item.image} alt={item.title} className="card-img floating-img" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.activities && (
                <ul className="class-activities">
                  {item.activities.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 3 */}
    <section className="page-section animate-section slide-up">
      <div className="highlight-section">
        <div className="page-container highlight-banner">
          <h2>Schedule a Visit</h2>
          <p>
            Experience the warmth of our classrooms and meet the dedicated teachers guiding each learning journey.
          </p>
          <div className="banner-actions">
            <Link to="/contact" className="primary">Book a Visit</Link>
            <Link to="/contact" className="outline">Enroll Now</Link>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default ClassesPage
