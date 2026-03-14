import React, { useMemo } from 'react'
import './AboutPage.css'

// Editable: set the filename you want to use for the School History photo.
// You can use a bare filename (e.g. 'images.jpg' or 'IMG-20250401-WA05.png')
// or the relative path '../assets/your-file.ext'. If the name isn't found
// the code will pick a random asset as a fallback.
const historyImageName = 'group.webp'

const AboutPage = () => {
  const imageModules = import.meta.glob('../assets/**/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })

  const historyImageUrl = useMemo(() => {
    // build lookup keys (exact, lowercase, bare filename)
    const lookup = Object.entries(imageModules).reduce((acc, [key, url]) => {
      acc[key] = url
      acc[key.toLowerCase()] = url
      const bare = key.replace(/^\.\.\/assets\//, '')
      acc[bare] = url
      acc[bare.toLowerCase()] = url
      return acc
    }, {})

    if (!historyImageName) return null
    const tryKeys = [historyImageName, historyImageName.toLowerCase(), historyImageName.replace(/^\.\.\/assets\//, ''), historyImageName.replace(/^\.\.\/assets\//, '').toLowerCase()]
    for (const k of tryKeys) {
      if (lookup[k]) return lookup[k]
    }

    // fallback: pick a random image
    const urls = Object.values(imageModules)
    return urls.length ? urls[Math.floor(Math.random() * urls.length)] : null
  }, [imageModules])
  return (

    <div className="about-page">
      <section className="about-hero">
        <h1 className="page-title">About MamaCare</h1>
        <p className="page-subtitle">
          Empowering early childhood education, one child at a time
        </p>
      </section>

      <section className="history-section">
        <h2 className="section-title">School History</h2>
        <div className="history-grid">
          <div className="history-image">
            {historyImageUrl ? (
              <img src={historyImageUrl} alt="School history" />
            ) : (
              <div className="image-placeholder">
                <span className="image-emoji">🏫</span>
              </div>
            )}
          </div>
          <div className="history-text">
            <h1>Since 2024, Mama Care Nursery & Daycare has been Championing The
               Education Of Children around Njeru, Buikwe, district Uganda.
                To Benefit From Quality Free Education, And To Prosper With
                 Access To Clean Water, Good Health Care, & Nutrition.</h1>

            <h2>Welcome to Mama Care Nursery & Daycare</h2>
            <p>
             MamaCare Nursery & Daycare is a non-profit child care center founded by
              Nabakka Brenda to help disadvantaged children in desperate need of help
               and support in education. The experience of growing up in a community
                faced with poor education services and experiencing first-hand the
                 challenges the vulnerable children, neglected, abandoned children
                  went through inspired her to establish an organization that helped
                   provide these children with basic human needs like food, shelter,
                    healthcare and education. They then donated their acres of land
                     in Kizungu Zone to set up a Children’s Centre to provide these
                      desperate children with free nursery education giving them
                       opportunities and hope for a brighter future. Within the
                        Children’s Centre in Kizungu zone, njeru, Buikwe District,
                         Uganda. Established in January 2025; located in Kizungu zone,
                          Mbikko, Njeru in Buikwe District We render facilities that
                           provide care, supervision, and early education for young
                            children. We play a vital role in supporting the development
                             and well-being of children during their early years; ages 9
                              months to 6 years.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="content-block">
          <div className="content-text">
            <h2>Our Mission</h2>
            <p>
              To provide a nurturing, and enriching environment for young children while
               supporting the needs of their parents and guardians.
            </p>
            <p>
              Our mission is to create a world where all children have the opportunity to 
              learn, grow, and thrive in nurturing educational environments.
            </p>
          </div>
          <div className="content-image">
            <div className="image-placeholder">
              <span className="image-emoji">🎯</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="content-block reverse">
          <div className="content-text">
            <h2>Our Vision</h2>
            <p>
              A trusted and leading childcare provider, dedicated to creating a safe, inclusive,
               and stimulating environment where every child can thrive, learn, and build a
                strong foundation for lifelong success.
            </p>
            <ul className="vision-list">
              <li>Support 100+ nursery schools by 2025</li>
              <li>Train 500+ early childhood educators</li>
              <li>Provide educational resources to 10,000+ children</li>
              <li>Build sustainable partnerships with communities</li>
            </ul>
          </div>
          <div className="content-image">
            <div className="image-placeholder">
              <span className="image-emoji">🌟</span>
            </div>
          </div>
        </div>
      </section>

      <section className="motto-section">
        <div className="content-block">
          <div className="content-text">
            <h2>Our Motto</h2>
            <p className="motto-text">"Little Minds, Big Future."</p>
          </div>
          <div className="content-image">
            <div className="image-placeholder">
              <span className="image-emoji">🌱</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Compassion</h3>
            <p>We approach every child and educator with empathy and understanding</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Partnership</h3>
            <p>We work collaboratively with communities </p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>Excellence</h3>
            <p>We strive for the highest standards in all our programs and initiatives</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Impact</h3>
            <p>We measure success by the positive change we create in children's lives</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h3>Nabakka Brenda</h3>
            <p className="member-role">Director</p>
            <p className="member-bio">Dedicated to creating impactful educational programs</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍🏫</div>
            <h3>Nakyondwa Angella</h3>
            <p className="member-role">Teacher</p>
            <p className="member-bio">Expert in early childhood education and teacher development</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h3>Angeyo Stella</h3>
            <p className="member-role">Teacher</p>
            <p className="member-bio">Building strong relationships with schools and communities</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


