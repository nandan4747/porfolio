// ProjectCard.tsx
import "./App.css";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  url,
  imageUrl,
}: Project) {
  const card = (
    <div className="project-card">
      <div className="project-card-media">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name} preview`}
            className="project-card-image"
          />
        ) : (
          <span className="project-card-initial">{name.charAt(0)}</span>
        )}
      </div>
      <div className="project-card-body">
        <p className="project-card-name">{name}</p>
        <p className="project-card-description">{description}</p>
        <ul className="project-card-tags">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-card-link"
    >
      {card}
    </a>
  ) : (
    card
  );
}
