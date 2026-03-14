import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import email from '../assets/email.png';
import mcare from '../assets/mcare.png';

const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Classes', path: '/classes' },
  { label: 'Team', path: '/team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'donate', path: '/donate' },
  { label: 'Upload', path: '/upload' },

]

const Header = () => {

  const user = null
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleToggle = () => setMobileOpen((prev) => !prev)

  const handleClose = () => setMobileOpen(false)



  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="mamacare"><span>Mamacare Nursery & Daycare</span></div>
        <div className="page-container top-bar-content">
          <div className="top-bar-item">
            <span className="icon" aria-hidden="true"><img src={email} alt="email icon" /></span>
            <a href="mailto:mamacare2425@gmail.com">mamacare2425@gmail.com</a>
          </div>
          <div className="top-bar-item">
            <span className="icon" aria-hidden="true">📞</span>
            <span className="label">Call</span>
            <a href="tel:+256757661517">+256 757 661517</a>
          </div>
          <div className="top-bar-item top-bar-cta">
            <Link to="/donate" className="top-bar-link">
              Help a child with a gift of education!
            </Link>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="page-container nav-content">
          <Link to="/" className="brand">
            <img
              src={mcare}
              alt="MamaCare Nursery & Daycare"
            />
          </Link>

          <nav className={`nav-menu ${mobileOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={handleClose}
              >
                {item.label}
              </NavLink>
            ))}
            {/* auth removed: no login/register links */}
          </nav>

          <Link to="/donate" className="donate-btn">
            Donate
          </Link>

          <button
            type="button"
            className={`mobile-toggle ${mobileOpen ? 'is-open' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
