import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="section page contact">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I'm open to internships, collaborations, and new opportunities.
              Feel free to reach out — I'd love to hear from you.
            </p>

            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${portfolioData.phone.replace(/\s/g, "")}`}>
                  {portfolioData.phone}
                </a>
              </li>
              <li>
                <span>Location</span>
                <span>{portfolioData.location}</span>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/ruwinya-karunarathna
                </a>
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your message! Connect with me directly via email or LinkedIn.");
            }}
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Your message..." required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
