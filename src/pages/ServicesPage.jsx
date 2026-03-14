import React from "react";
import "./SitePages.css";
import ball from "../assets/ball.jpg";
import garden from "../assets/garden.webp";
import seek from "../assets/seek.webp";
import swing from "../assets/swing.webp";
import dough from "../assets/dough.webp";
import blead from "../assets/blead.webp";
import draw from "../assets/draw.webp";
import photo from "../assets/photo.webp";
import outdoor from "../assets/1.jpeg";
import artcraft from "../assets/2.jpeg";
import enroll from "../assets/3.webp";
import activeLearning from "../assets/4.jpeg";
import childCare from "../assets/6.webp";
import healthyMeals from "../assets/7.jpeg";
import secureEnv from "../assets/1.jpeg";

const Services = () => {
  return (
    <div className="services-page">

      <section className="service-section enroll-section">
        <h2 className="section-title">Enrol Your Child In A Session Now!</h2>
        <p className="section-intro">
         We provide nursey going children with pre-school education to prepare them for the next strp of their education.
        </p>

        <div className="enroll-grid">
          <div className="enroll-card green">
            <img src={activeLearning} alt="Active Learning" className="enroll-card-img" />
            <h3>Active Learning</h3>
            <p>
              We provide a caring and nurturing environment for children to grow, learn, and thrive.
            </p>
          </div>

          <div className="enroll-card blue">
            <img src={childCare} alt="Child Care" className="enroll-card-img" />
            <h3>Child Care</h3>
            <p>
              Our dedicated staff are trained professionals passionate about early childhood education.
            </p>
          </div>

          <div className="enroll-card purple">
            <img src={healthyMeals} alt="Healthy Meals" className="enroll-card-img" />
            <h3>Healthy Meals</h3>
            <p>
              Good food makes great minds — when kids eat healthy, they grow, learn, and laugh even louder!
            </p>
          </div>

          <div className="enroll-card orange">
            <img src={secureEnv} alt="Secure Environment" className="enroll-card-img" />
            <h3>Secure Environment</h3>
            <p>
              We have a large indoor and outdoor area, allowing safe and fun activities for all children.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- OUTDOOR ACTIVITIES ---------------- */}
      <section className="service-section">
        <h2 className="section-title">Outdoor Activities</h2>
        <p className="section-intro">
          When it is time for the kids to have fun outside, we go an extra mile for them. These include;
        </p>

        <div className="service-grid">
          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={ball} alt="Ball Games" className="circle-img" />
            </div>
            <div>
              <h3>Ball Games</h3>
              <p>
                Engage in friendly competition with a variety of ball games, from soccer and basketball
                to catch and kickball. Let the kids run, kick, and score their way to outdoor fun!
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={garden} alt="Gardening" className="circle-img" />
            </div>
            <div>
              <h3>Gardening</h3>
              <p>
                Nurture your child’s green thumb as they learn about plants, flowers, and gardening.
                From planting seeds to watering and watching them grow, this activity teaches responsibility
                and appreciation for nature.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={seek} alt="Hide and Seek" className="circle-img" />
            </div>
            <div>
              <h3>Hide & Seek</h3>
              <p>
                Hide and seek is a classic and timeless game that brings endless fun and excitement to children of all ages.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={swing} alt="Swinging" className="circle-img" />
            </div>
            <div>
              <h3>Swinging</h3>
              <p>
                Let your child soar high on our sturdy swings. The gentle breeze and sense of freedom will bring pure joy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ART & CRAFT ---------------- */}
      <section className="service-section">
        <h2 className="section-title">Art & Craft</h2>
        <p className="section-intro">
          Art and craft activities provide a wonderful outlet for children to express their creativity and imagination
          while developing essential skills.
        </p>

        <div className="service-grid">
          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={dough} alt="Play Dough" className="circle-img" />
            </div>
            <div>
              <h3>Play & Dough</h3>
              <p>
                Mold, squish, and shape with colorful play dough! Children explore their tactile senses and enhance fine motor skills.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={blead} alt="Beading" className="circle-img" />
            </div>
            <div>
              <h3>Beading</h3>
              <p>
                Children can design and string colorful beads to make their own jewelry, fostering fine motor skills and creativity.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={draw} alt="Drawing" className="circle-img" />
            </div>
            <div>
              <h3>Drawing</h3>
              <p>
                Grab a pencil and paper and let your child's imagination come to life through sketching and creativity.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="circle-wrapper">
              <div className="circle-border"></div>
              <img src={photo} alt="Photo Book" className="circle-img" />
            </div>
            <div>
              <h3>Photo Book</h3>
              <p>
                Preserve memories as children create their own photo books with captions and personalized pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ENROLL SECTION ---------------- */}
      
    </div>
  );
};

export default Services;
