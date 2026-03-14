import React from 'react'
import './TestimonialsPage.css'

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nabakka Brenda',
      role: 'Principal, Mamacare Nursery and Daycare',
      image: '👩‍🏫',
      text: 'MamaCare has transformed our children. The books and resources they provided have made such a difference in our children\'s learning. Our teachers are more confident thanks to their training programs.',
      rating: 5
    },
    {
      id: 2,
      name: 'Angella Nansubuga',
      role: 'Nurseeery Teacher',
      image: '👩',
      text: 'The teacher training I received through MamaCare was exceptional. I learned new teaching methods that have made my classes more engaging and effective. The children are more excited about learning!',
      rating: 5
    },
    {
      id: 3,
      name: 'Obwo Sunday',
      role: 'Parent',
      image: '👨',
      text: 'My Son\'s nursery school received so much support from MamaCare. The infrastructure improvements and educational materials have created a wonderful learning environment. Thank you!',
      rating: 5
    },
  ]

  const renderStars = (rating) => {
    return '⭐'.repeat(rating)
  }

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <h1 className="page-title">What People Say</h1>
        <p className="page-subtitle">
          Hear from educators, parents, and partners about their experience with MamaCare
        </p>
      </section>

      <section className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">{testimonial.image}</div>
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
          </div>
        ))}
      </section>

      <section className="testimonials-stats">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-value">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">5+</div>
            <div className="stat-label">Happy Partners</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage


