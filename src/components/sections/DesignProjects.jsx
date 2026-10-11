import { siteContent } from '../../content.ts';

function DesignPlate({ project, index }) {
  const { caseLabels } = siteContent.design;
  const { todoKind } = siteContent.labels;
  const image = project.images[0];

  return (
    <article
      className={`design-plate${index % 2 ? ' design-plate--reverse' : ''}`}
    >
      <figure className="design-plate__figure">
        {image.src ? (
          <img
            className="image-frame"
            src={image.src}
            alt={image.alt}
            width={image.width || 1440}
            height={image.height || 900}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label={image.alt}>
            {image.alt}
          </div>
        )}
        <figcaption>{image.caption}</figcaption>
      </figure>
      <div className="design-plate__copy">
        <p className="eyebrow accent-on-dark">
          {String(index + 1).padStart(2, '0')} /{' '}
          {project.kind || project.kindLabel || todoKind} / {project.year}
        </p>
        <h3>{project.title}</h3>
        <p>{project.oneLiner}</p>
        <dl className="case-note">
          {Object.entries(project.caseNote).map(([key, value]) => (
            <div key={key}>
              <dt>{caseLabels[key]}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {project.details?.map((detail) => <p key={detail}>{detail}</p>)}
        <p className="project-meta">
          {project.role} / {project.stack.join(', ')}
        </p>
        {project.links?.live && (
          <a className="text-link text-link--dark" href={project.links.live}>
            {caseLabels.visit}
          </a>
        )}
      </div>
    </article>
  );
}

function DesignProjects() {
  const { design } = siteContent;

  return (
    <section
      className="design-section"
      id="design"
      aria-labelledby="design-title"
    >
      <div className="page-shell">
        <div className="section-heading section-heading--dark">
          <h2 id="design-title">{design.title}</h2>
          <p className="eyebrow">{design.caption}</p>
        </div>
        <div className="design-plates">
          {design.projects.map((project, index) => (
            <DesignPlate key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignProjects;
