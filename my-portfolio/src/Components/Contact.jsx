import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  EmailOutlineIcon,
  LinkedInOutlineIcon,
  LocationOutlineIcon,
} from "./SocialIcons";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;

    setStatus("opened");
    form.reset();
  };

  return (
    <section className="section page contact">
      <div className="container contact-layout">
        <div className="contact-left">
          <div className="section-header contact-header">
            <p className="eyebrow">Contact</p>
            <h2>Let's Connect</h2>
          </div>

          <div className="contact-info">
            <p>
              I'm open to internships, collaborations, and new opportunities.
              Feel free to reach out — I'd love to hear from you.
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon-circle" aria-hidden="true">
                  <EmailOutlineIcon size={24} />
                </span>
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon-circle" aria-hidden="true">
                  <LinkedInOutlineIcon size={20} />
                </span>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {portfolioData.name}
                </a>
              </li>
              <li className="contact-item">
                <span className="contact-icon-circle" aria-hidden="true">
                  <LocationOutlineIcon size={20} />
                </span>
                <span className="contact-text">{portfolioData.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status === "opened" && (
            <p className="form-feedback form-feedback-success">
              Your email app should open — press Send there to deliver the
              message from your inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
