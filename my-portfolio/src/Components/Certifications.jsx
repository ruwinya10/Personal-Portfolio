import { portfolioData } from "../data/portfolioData";
import certificatePlaceholder from "../assets/logo.png";

export default function Certifications() {
  return (
    <section className="section page certifications">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Certifications</p>
          <h2>Learning & Credentials</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.certifications.map((cert) => (
            <article className="project-card cert-card" key={cert.title}>
              <div className="project-image-wrapper">
                <img
                  src={cert.image || certificatePlaceholder}
                  alt={cert.image ? `${cert.title} certificate` : ""}
                  className="project-image cert-image"
                />
              </div>
              <div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.date && <p className="cert-date">{cert.date}</p>}
              </div>
              {cert.description && (
                <div className="project-top">
                  <p>{cert.description}</p>
                </div>
              )}
              <div className="project-links">
                {cert.credentialUrl ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    View Credential
                  </a>
                ) : (
                  <button className="cert-credential-unavailable" type="button" disabled>
                    View Credential
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
