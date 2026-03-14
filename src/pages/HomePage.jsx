import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HomePage.css'

const imageModules = import.meta.glob('../assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
})



const slideImagePaths = [
  '1.jpeg',
  '2.jpeg',
  '3.webp',
]

const charityMessages = [
  {
    title: 'Every child deserves a bright start',
    subtitle:
      'Help us provide safe classrooms, nutritious meals, and joyful learning moments for nursery learners.',
  },
  {
    title: 'Your kindness powers young dreams',
    subtitle:
      'Join our mission to equip teachers, support parents, and inspire little minds every single day.',
  },
  {
    title: 'Together, we build brighter futures',
    subtitle:
      'Sponsor early childhood programs that nurture confidence, curiosity, and community.',
  },
]

const STORAGE_KEY = 'mamacare-gallery-items'

const loadGalleryItems = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

const HomePage = () => {
  const navigate = useNavigate()
  const allImages = useMemo(() => {
    return Object.entries(imageModules).reduce((acc, [path, url]) => {
      if (/\.(png|jpe?g|webp|avif|gif)$/i.test(path) && url) {
        acc.push(url)
      }
      return acc
    }, [])
  }, [])


  const configuredSlideUrls = useMemo(() => {
    if (!Array.isArray(slideImagePaths) || slideImagePaths.length === 0) return []

   
    const lookup = Object.entries(imageModules).reduce((acc, [key, url]) => {
      acc[key] = url
      acc[key.toLowerCase()] = url
     
      const bare = key.replace(/^\.\.\/assets\//, '')
      acc[bare] = url
      acc[bare.toLowerCase()] = url
      return acc
    }, {})

    return slideImagePaths
      .map((p) => {
        if (!p) return null
        return (
          lookup[p] || lookup[p.toLowerCase()] || lookup[p.replace(/^\.\.\/assets\//, '')] || lookup[p.replace(/^\.\.\/assets\//, '').toLowerCase()] || null
        )
      })
      .filter(Boolean)
  }, [imageModules])

  const slideshowImages = useMemo(() => {

    const source = configuredSlideUrls.length > 0 ? configuredSlideUrls : allImages

    if (source.length <= 3) {
      return source
    }
    const pool = [...source]
    const selection = []
    while (pool.length > 0 && selection.length < 3) {
      const randomIndex = Math.floor(Math.random() * pool.length)
      const [chosen] = pool.splice(randomIndex, 1)
      selection.push(chosen)
    }
    return selection
  }, [allImages, configuredSlideUrls])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slideshowImages.length <= 1) {
      return undefined
    }
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slideshowImages])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideshowImages.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + slideshowImages.length) % slideshowImages.length
    )
  }

  const [recentItems, setRecentItems] = useState([])
  const recentTrackRef = useRef(null)

  useEffect(() => {
    const items = loadGalleryItems()
    const withDates = items
      .filter((item) => item && item.url)
      .sort((a, b) => {
        const ad = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const bd = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return bd - ad
      })
    setRecentItems(withDates.slice(0, 10))
  }, [])

  const handleRecentPrev = () => {
    if (!recentTrackRef.current) return
    const amount = recentTrackRef.current.clientWidth * 0.8
    recentTrackRef.current.scrollBy({ left: -amount, behavior: 'smooth' })
  }

  const handleRecentNext = () => {
    if (!recentTrackRef.current) return
    const amount = recentTrackRef.current.clientWidth * 0.8
    recentTrackRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handleRecentClick = (item) => {
    if (!item || !item.id) return
    navigate(`/gallery?item=${encodeURIComponent(item.id)}`)
  }


  return (
    <div className="home-page">
      {slideshowImages.length > 0 && (
        <section className="slideshow-section">
          <div className="slideshow-wrapper">
            <div className="slideshow-track">
              {slideshowImages.map((src, index) => {
                const message =
                  charityMessages[index % charityMessages.length]
                return (
                  <div
                    className={`slide ${
                      index === activeIndex ? 'is-active' : ''
                    }`}
                    key={src}
                    aria-hidden={index !== activeIndex}
                    style={{ backgroundImage: `url(${src})` }}
                  >
                    <div className="slide-overlay" />
                    <div className="slide-content">
                      <div className="slide-card">
                        <div className="slide-card-accent" />
                        <div className="slide-card-body">
                          <h2>{message.title}</h2>
                          <p>{message.subtitle}</p>
                          <Link to="/donate" className="slide-cta">
                            Get Involved
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {slideshowImages.length > 1 && ( 
              <>
                <button
                  type="button"
                  className="slide-control previous"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="slide-control next"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  ›
                </button>
                <div className="slide-indicators">
                  {slideshowImages.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`indicator ${
                        index === activeIndex ? 'is-active' : ''
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {recentItems.length > 0 && (
        <section className="recent-updates">
          <div className="recent-shell">
            <header className="recent-header">
              <h2>Recent Updates</h2>
              <p>
                Fresh moments from our classrooms, playgrounds, and community events, just
                added to the gallery.
              </p>
            </header>

            <div className="recent-track-wrapper">
              <div className="recent-track" ref={recentTrackRef}>
                {recentItems.map((item) => {
                  const dateLabel = item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : ''

                  return (
                    <article
                      key={item.id}
                      className="recent-card"
                      onClick={() => handleRecentClick(item)}
                    >
                      <div className="recent-media">
                        {item.type === 'video' ? (
                          <video src={item.url} muted playsInline />
                        ) : (
                          <img src={item.url} alt={item.title || 'Recent update'} />
                        )}
                      </div>
                      <div className="recent-meta">
                        <h3>{item.title || 'MamaCare highlight'}</h3>
                        {item.caption && <p className="recent-caption">{item.caption}</p>}
                        {dateLabel && (
                          <p className="recent-date">Uploaded on {dateLabel}</p>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="recent-nav">
                <button
                  type="button"
                  className="recent-nav-btn prev"
                  onClick={handleRecentPrev}
                  aria-label="Scroll previous updates"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="recent-nav-btn next"
                  onClick={handleRecentNext}
                  aria-label="Scroll next updates"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/projects" className="action-card">
            <div className="action-icon">📋</div>
            <h3>View Projects</h3>
            <p>See our ongoing initiatives</p>
          </Link>
          <Link to="/testimonials" className="action-card">
            <div className="action-icon">💬</div>
            <h3>Testimonials</h3>
            <p>Read success stories</p>
          </Link>
          <Link to="/contact" className="action-card">
            <div className="action-icon">📧</div>
            <h3>Contact Us</h3>
            <p>Get in touch with us</p>
          </Link>
          <Link to="/about" className="action-card">
            <div className="action-icon">ℹ️</div>
            <h3>About Us</h3>
            <p>Learn more about MamaCare</p>
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <h2 className="section-title">Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏫</div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Homes Supported</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👶</div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Children Helped</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👨‍🏫</div>
            <div className="stat-number">4+</div>
            <div className="stat-label">Teachers Trained</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Books Donated</div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default HomePage


