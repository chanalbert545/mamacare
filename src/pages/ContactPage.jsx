import { useState } from "react";
import "./ContactPage.css";
import Swal from 'sweetalert2'

const infoCards = [
  {
    title: "Phone No",
    text: "+256 757 661 517",
    icon: "https://wordpress.vecurosoft.com/kiddino/wp-content/uploads/2023/08/c-b-1-1.svg",
  },
  {
    title: "Monday to Friday",
    text: "8:30am – 02:00pm",
    icon: "https://wordpress.vecurosoft.com/kiddino/wp-content/uploads/2023/08/c-b-1-2.svg",
  },
  {
    title: "Email Address",
    text: "mamacare2425@gmail.com",
    icon: "https://wordpress.vecurosoft.com/kiddino/wp-content/uploads/2023/08/c-b-1-3.svg",
  },
];

function ContactPage() {
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setResult("Sending...");

  const submitData = new FormData();
  submitData.append("access_key", "b1736f82-62a4-4fe3-bbc0-1effb7bce6ba");
  submitData.append("name", formData.name);
  submitData.append("email", formData.email);
  submitData.append("number", formData.number);
  submitData.append("message", formData.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: submitData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully!");

    Swal.fire({
      title: "Success!",
      text: "Your message has been sent.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    });

    setFormData({ name: "", email: "", number: "", message: "" });
  } else {
    setResult("Something went wrong. Please try again.");

    Swal.fire({
      title: "Error",
      text: "Failed to send the message.",
      icon: "error",
      confirmButtonColor: "#d33",
      confirmButtonText: "Try Again"
    });

    console.log("Error:", data);
  }
};


  return (
    <div className="contact-page">

      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="page-container breadcrumb-content">
          <div>
            <h1>Contact</h1>
            <p>
              Home <span>/</span> Contact
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards">
        <div className="page-container cards-grid">
          {infoCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-main">
        <div className="contact-container">
          <h2>Contact Us</h2>

          {result && <p className="form-result">{result}</p>}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="number"
                name="number"
                placeholder="Enter phone number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message…"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="page-container">
          <div className="map-wrapper">
            <iframe
              title="MamaCare Nursery & Daycare location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA1BB4U_Ob1Qkh4SvP9uWCDZQ5hcOuA0aE&q=cape%20royale,%20njeru,%20uganda.&zoom=11"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
