import { portfolioData } from "../data/portfolioData";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {portfolioData.name}. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
          <a href={`mailto:${portfolioData.email}`} aria-label="Send email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
