import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="section page about">
      <div className="container">
        <div className="about-grid">
          <div className="section-header about-header">
            <p className="eyebrow">About Me</p>
            <h2>Who I Am</h2>
          </div>

          <div className="about-text">
            <p>{about.intro}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-highlights">
            {about.highlights.map((item) => (
              <div className="highlight-card" key={item.label}>
                <span className="highlight-label">{item.label}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
