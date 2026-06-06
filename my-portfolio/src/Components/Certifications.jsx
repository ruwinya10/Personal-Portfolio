import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section className="section page certifications">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Certifications</p>
          <h2>Learning & Credentials</h2>
        </div>

        <div className="cert-grid">
          {portfolioData.certifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <a href={cert.credentialUrl}>View Credential</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
