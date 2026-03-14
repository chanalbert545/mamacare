import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import tiktokIcon from '../assets/tiktok.png'
import facebookIcon from '../assets/facebook.png'

const galleryImages = [
  'https://mamacarenursery.kesug.com/wp-content/uploads/2025/04/IMG-20250401-WA0510.jpg',
  'https://mamacarenursery.kesug.com/wp-content/uploads/2025/04/IMG-20250401-WA0507.jpg',
  'https://mamacarenursery.kesug.com/wp-content/uploads/2025/04/IMG-20250401-WA0512.jpg',
]

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-main">
        <div className="page-container footer-grid">
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <p>Monday to Friday: <span>8:30am – 02:00pm</span></p>
            <p>Saturday & Sunday: <span>Closed</span></p>
            <div className="footer-contact">
              <p>
                <span role="img" aria-label="email">📧</span>
                <a href="mailto:mamacare2425@gmail.com">mamacare2425@gmail.com</a>
              </p>
              <p>
                <span role="img" aria-label="phone">📞</span>
                <a href="tel:+256757661517">+256 757 661 517</a>
              </p>
              <p>
                <span role="img" aria-label="location">📍</span>
                Kizungu zone, Mbikko, Njeru Buikwe District, Uganda.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Useful Services</h3>
            <ul className="footer-links">
              <li><a href="https://mamacarenursery.kesug.com/donate-now/" target="_blank" rel="noreferrer">Advocate</a></li>
              <li><a href="https://mamacarenursery.kesug.com/donate-now/" target="_blank" rel="noreferrer">Partner</a></li>
              <li><a href="https://mamacarenursery.kesug.com/School%20Donation%20Form" target="_blank" rel="noreferrer">Sponsor</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Gallery</h3>
            <div className="footer-gallery">
              {galleryImages.map((src) => (
                <a key={src} href={src} target="_blank" rel="noreferrer">
                  <img src={src} alt="School activity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container footer-bottom-content">
          <p>© 2025 MamaCare Nursery & Daycare. All Rights Reserved.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="Tiktok">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@mamacare2425" target="_blank" rel="noreferrer" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
