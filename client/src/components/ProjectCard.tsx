import { ArrowUpRight } from "lucide-react";
import type { Project } from "../content/portfolio";

function ProjectLink({ label, url }: { label: string; url: string }) {
  if (!url) {
    return (
      <span className="project-link-placeholder">
        {label} <span aria-hidden="true">↗</span>
      </span>
    );
  }

  return (
    <a className="project-link" href={url} target="_blank" rel="noreferrer">
      {label} <ArrowUpRight aria-hidden="true" size={15} />
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div
        className={`project-preview project-preview--${project.visual}`}
        role="img"
        aria-label={`Screenshot placeholder for ${project.title}`}
      >
        <div className="preview-window" aria-hidden="true">
          <div className="preview-toolbar">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="preview-content">
            {project.visual === "dashboard" && (
              <>
                <div className="preview-sidebar">
                  <b />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-dashboard">
                  <div className="preview-title-line" />
                  <div className="preview-metrics"><i /><i /><i /></div>
                  <div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                </div>
              </>
            )}
            {project.visual === "editorial" && (
              <div className="preview-editorial">
                <div className="preview-image-block" />
                <div className="preview-editorial-copy">
                  <b />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            {project.visual === "mobile" && (
              <div className="preview-phone">
                <div className="preview-phone-top" />
                <div className="preview-phone-hero" />
                <div className="preview-phone-line" />
                <div className="preview-phone-line short" />
                <div className="preview-phone-button" />
              </div>
            )}
          </div>
        </div>
        <span className="preview-placeholder-label">Replace with project screenshot</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <span className="project-number">PROJECT {project.number}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label="Project technologies">
          {project.technologies.map((technology, index) => (
            <li key={`${technology}-${index}`}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <ProjectLink label="Live project" url={project.liveUrl} />
          <ProjectLink label="Source code" url={project.sourceUrl} />
        </div>
      </div>
    </article>
  );
}
