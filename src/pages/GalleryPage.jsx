import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './gallery.css'

const CATEGORIES = [
  'Classroom Life',
  'Play & Creativity',
  'Meals & Care',
  'Projects Done',
  'Events & Donors',
]

const STORAGE_KEY = 'mamacare-gallery-items'

// Read all gallery items from localStorage
const loadItems = () => {
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

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])
  const [items, setItems] = useState([])
  const [activeItem, setActiveItem] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setItems(loadItems())
  }, [])

  const filtered = items.filter((item) => item.category === activeCategory)

  useEffect(() => {
    if (!items.length) return
    const params = new URLSearchParams(location.search)
    const targetId = params.get('item')
    if (!targetId) return
    const found = items.find((it) => it.id === targetId)
    if (found) {
      setActiveCategory(found.category)
      setActiveItem(found)
    }
  }, [location.search, items])

  const openItem = (item) => {
    setActiveItem(item)
    const params = new URLSearchParams(location.search)
    params.set('item', item.id)
    navigate({ search: params.toString() }, { replace: false })
  }

  const closeLightbox = () => {
    setActiveItem(null)
    const params = new URLSearchParams(location.search)
    params.delete('item')
    const search = params.toString()
    navigate({ search: search ? `?${search}` : '' }, { replace: true })
  }

  useEffect(() => {
    if (!activeItem) return
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeItem])

  return (
    <section className="gallery-page">
      <header className="gallery-header">
        <h1>Our Nursery in Photos & Videos</h1>
        <p>
          Peek into the daily magic at MamaCare Nursery &amp; Daycare — play, learning,
          meals, and community support that your generosity makes possible.
        </p>
      </header>

      <div className="gallery-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`gallery-tab ${cat === activeCategory ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="gallery-empty">
          <h2>No items in this category yet</h2>
          <p>
            Our team will be adding photos and videos here soon. Check back after events
            and school activities.
          </p>
        </div>
      ) : (
        <div className="gallery-grid">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="gallery-item"
              onClick={() => openItem(item)}
            >
              <div className="gallery-media-wrapper">
                {item.type === 'video' ? (
                  <video
                    src={item.url}
                    className="gallery-media"
                    controls
                    playsInline
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.title || 'Gallery item'}
                    className="gallery-media"
                  />
                )}
              </div>
              {(item.title || item.caption) && (
                <div className="gallery-meta">
                  {item.title && <h3>{item.title}</h3>}
                  {item.caption && <p>{item.caption}</p>}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {activeItem && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div
            className="gallery-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <div className="gallery-lightbox-media">
              {activeItem.type === 'video' ? (
                <video
                  src={activeItem.url}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={activeItem.url}
                  alt={activeItem.title || 'Gallery item'}
                />
              )}
            </div>
            {(activeItem.title || activeItem.caption) && (
              <div className="gallery-lightbox-meta">
                {activeItem.title && <h2>{activeItem.title}</h2>}
                {activeItem.caption && <p>{activeItem.caption}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryPage