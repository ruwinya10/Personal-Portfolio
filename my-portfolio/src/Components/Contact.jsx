import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { EmailIcon, LinkedInIcon } from "./SocialIcons";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${portfolioData.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: "New portfolio contact form message",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                <span className="contact-icon" aria-hidden="true">
                  <EmailIcon size={22} />
                </span>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <span>{portfolioData.location}</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <LinkedInIcon size={20} />
                </span>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {portfolioData.name}
                  </a>
                </div>
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="form-feedback form-feedback-success">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback-error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
