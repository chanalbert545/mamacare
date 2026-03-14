import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SitePages.css'

const CATEGORIES = [
  'Classroom Life',
  'Play & Creativity',
  'Events & Donors',
  'Meals & Care',
  'Projects Done',
]

const STORAGE_KEY = 'mamacare-gallery-items'

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

const saveItems = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const UploadPage = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [type, setType] = useState('photo')
  const [url, setUrl] = useState('')
  const [items, setItems] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [widgetReady, setWidgetReady] = useState(false)

  useEffect(() => {
    setItems(loadItems())
    if (typeof window !== 'undefined' && window.cloudinary) {
      setWidgetReady(true)
    }
  }, [])

  const itemsForCategory = useMemo(
    () => items.filter((item) => item.category === category),
    [items, category]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!url.trim()) return

    setSubmitting(true)

    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title.trim(),
      caption: caption.trim(),
      category,
      type,
      url: url.trim(),
      createdAt: new Date().toISOString(),
    }

    const updated = [newItem, ...items]
    setItems(updated)
    saveItems(updated)

    setTitle('')
    setCaption('')
    setUrl('')
    setSubmitting(false)

    // After a successful upload, take admin back to the gallery
    navigate('/gallery')
  }

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id)
    setItems(updated)
    saveItems(updated)
  }

  const handleCloudinaryUpload = () => {
    if (typeof window === 'undefined' || !window.cloudinary) return

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dpqgyodbr',
        uploadPreset: 'mamacare',
        folder: 'mamacare-gallery',
        multiple: false,
        resourceType: 'auto',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const info = result.info
          if (info.secure_url) {
            setUrl(info.secure_url)
          }
          if (info.resource_type === 'video') {
            setType('video')
          } else {
            setType('photo')
          }
        }
      }
    )

    widget.open()
  }

  return (
    <section className="page-section narrow">
      <header className="page-header">
        <h1>Manage Gallery</h1>
        <p>
          As an administrator you can add or remove photos and videos that appear in the
          public gallery. Paste links from your storage (for example Cloudinary or
          YouTube) and organise them into the five categories.
        </p>
      </header>

      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Category
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label>
            Media type
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="photo">Photo</option>
              <option value="video">Video</option>
            </select>
          </label>
        </div>

        <div className="cloudinary-row">
          <button
            type="button"
            className="secondary-btn"
            onClick={handleCloudinaryUpload}
            disabled={!widgetReady}
          >
            {widgetReady ? 'Upload from your device' : 'Loading Cloudinary…'}
          </button>
          <p className="helper-text">
            This uploads to Cloudinary and fills the media URL for you.
          </p>
        </div>

        <label>
          Caption (optional)
          <textarea
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Short description of what is happening in the photo or video."
          />
        </label>

        <label>
          Media URL
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="https://… (Cloudinary, YouTube, Vimeo, etc.)"
          />
        </label>

        <button type="submit" className="primary-btn" disabled={submitting}>
          {submitting ? 'Saving…' : 'Add to gallery'}
        </button>
      </form>

      <section className="admin-list">
        <header className="admin-list-header">
          <h2>Items in “{category}”</h2>
          <p>Remove any item to hide it from the public gallery.</p>
        </header>

        {itemsForCategory.length === 0 ? (
          <p className="muted-text">No items in this category yet.</p>
        ) : (
          <div className="admin-gallery-grid">
            {itemsForCategory.map((item) => (
              <article key={item.id} className="admin-gallery-item">
                <div className="admin-media-thumb">
                  {item.type === 'video' ? (
                    <video src={item.url} controls playsInline />
                  ) : (
                    <img src={item.url} alt={item.title || 'Gallery item'} />
                  )}
                </div>
                <div className="admin-item-meta">
                  {item.title && <h3>{item.title}</h3>}
                  {item.caption && <p>{item.caption}</p>}
                  <button
                    type="button"
                    className="danger-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default UploadPage
