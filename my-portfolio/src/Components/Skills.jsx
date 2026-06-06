import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section page skills">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
