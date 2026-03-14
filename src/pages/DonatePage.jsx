import { useState } from "react";
import "./donation.css";
import "./SitePageS.css";

export default function DonationPage() {
  const [raised, setRaised] = useState(450); // example
  const goal = 1000;
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="donation-page">
      {/* Donation Header */}
      <header className="donation-header">
        <h1>Support Our Mission</h1>
        <p>Your donation helps us make a difference.</p>
      </header>

      

      {/* Progress Bar */}
      <div className="progress-box">
        <h3>Donation Progress</h3>
        <div className="progress-wrapper">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p>Raised: <strong>${raised}</strong> / ${goal}</p>
      </div>

      {/* Transfer & Mobile Money Section */}
      <div className="transfer-page">
        <header className="transfer-header">
          <h1>Make a Donation</h1>
          <p>
            You can donate via Bank Transfer or Mobile Money. Use the details below.
          </p>
        </header>

        <section className="transfer-section">
          {/* Bank Transfer Box */}
          <div className="transfer-box bank-box">
            <h2>Bank Transfer</h2>
            <p><strong>Bank Name:</strong> Equity Bank Uganda</p>
            <p><strong>Account Name:</strong> Ocan Albert</p>
            <p><strong>Account Number:</strong> 1001103417177</p>
            <p>Use this information to transfer your donation directly.</p>
          </div>

          {/* Mobile Money Box */}
          <div className="transfer-box momo-box">
            <h2>Mobile Money</h2>
            <p><strong>MTN MoMo:</strong> 0773 808 579</p>
            <p><strong>Airtel Money:</strong> 0757 661 517</p>
            <p><strong>Names:</strong> Nabakka Brenda (for both)</p>
            <p>Send your donation using the respective mobile money number.</p>
          </div>
        </section>
      </div>

          <section className="page-section">
          <div className="page-container card-grid">
            <div className="info-card-primary">
              <h3>Support Learning Materials</h3>
              <p>
                $100 equips a class with books, art supplies, and interactive resources that make learning exciting.
              </p>
            </div>
            <div className="info-card-primary">
              <h3>Provide Nutritious Meals</h3>
              <p>
                $150 ensures students enjoy healthy meals every school day, keeping them energized and focused.
              </p>
            </div>
            <div className="info-card-primary">
              <h3>Upgrade Classrooms</h3>
              <p>
                $200 helps renovate learning spaces with safe furniture, play areas, and child-friendly decor.
              </p>
            </div>
            <div className="info-card-primary">
              <h3>Sponsor a Child</h3>
              <p>
                $400 covers tuition, meals, and transport for one learner for a full school year.
              </p>
            </div>
          </div>
        </section>
    </div>

    
    
  );
}
