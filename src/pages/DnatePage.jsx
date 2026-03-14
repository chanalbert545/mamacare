import React from 'react'
import { Link } from 'react-router-dom'
import './SitePages.css'

const DonatePage = () => (
  <div className="standard-page">
    <section className="page-hero">
      <div className="page-container page-hero-content">
        <h1>Donate</h1>
        <div className="page-hero-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Donate</span>
        </div>
        <p>Your generosity fuels classrooms, meals, and bright futures.</p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container card-grid">
        <div className="info-card-primary">
          <h3>Support Learning Materials</h3>
          <p>
            ₦50,000 equips a class with books, art supplies, and interactive resources that make learning exciting.
          </p>
        </div>
        <div className="info-card-primary">
          <h3>Provide Nutritious Meals</h3>
          <p>
            ₦75,000 ensures students enjoy healthy meals every school day, keeping them energized and focused.
          </p>
        </div>
        <div className="info-card-primary">
          <h3>Upgrade Classrooms</h3>
          <p>
            ₦120,000 helps renovate learning spaces with safe furniture, play areas, and child-friendly decor.
          </p>
        </div>
        <div className="info-card-primary">
          <h3>Sponsor a Child</h3>
          <p>
            ₦200,000 covers tuition, meals, and transport for one learner for a full school year.
          </p>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container highlight-banner">
        <h2>Make a Secure Donation</h2>
        <p>
          Kindly reach out to our team to arrange your gift or request bank transfer details. Together we can shape a
          brighter future.
        </p>
        <div className="banner-actions">
          <Link to="/contact" className="primary">
            Contact Finance Team
          </Link>
          <a
            href="https://mamacarenursery.kesug.com/donate-now/"
            className="outline"
            target="_blank"
            rel="noreferrer"
          >
            Donate Online
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default DonatePage
