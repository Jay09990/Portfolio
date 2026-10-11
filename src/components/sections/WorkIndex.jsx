import { siteContent } from '../../content.ts';

function ProjectImage({ image, label }) {
  return (
    <figure className="work-image">
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
      <figcaption>{image.caption || label}</figcaption>
    </figure>
  );
}

function WorkRow({ project, index }) {
  const { work } = siteContent;
  const { labels } = siteContent;

  return (
    <li className="work-row">
      <details>
        <summary className="work-row__summary">
          <span className="work-row__number" data-label={work.columns[0]}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="work-row__title" data-label={work.columns[1]}>
            {project.title}
          </span>
          <span className="work-row__description" data-label={work.columns[2]}>
            {project.oneLiner}
          </span>
          <span className="work-row__stack" data-label={work.columns[3]}>
            {project.stack.length
              ? project.stack.join(', ')
              : labels.todoStack}
          </span>
          <span className="work-row__year" data-label={work.columns[4]}>
            {project.year || labels.todoYear}
          </span>
          <span className="work-row__status" data-label={work.columns[5]}>
            {project.status || labels.todoStatus}
          </span>
        </summary>
        <div className="work-row__details">
          <ProjectImage image={project.images[0]} label={work.imageLabel} />
          <div className="work-row__body">
            <p>{project.description}</p>
            {project.role && <p>{project.role}</p>}
            <div className="work-row__links">
              {project.links?.live && (
                <a className="text-link" href={project.links.live}>
                  {work.columns[1]} / {labels.liveSite}
                </a>
              )}
              {project.links?.repo && (
                <a className="text-link" href={project.links.repo}>
                  {work.columns[1]} / {labels.repository}
                </a>
              )}
              {!project.links?.live && !project.links?.repo && (
                <p>{labels.todoProjectLinks}</p>
              )}
            </div>
          </div>
        </div>
      </details>
    </li>
  );
}

function WorkIndex() {
  const { work } = siteContent;

  return (
    <section
      className="work-section page-shell"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <h2 id="work-title">{work.title}</h2>
        <p className="eyebrow">{work.caption}</p>
      </div>
      <div className="work-table-header" aria-hidden="true">
        {work.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      <ol className="work-list">
        {work.projects.map((project, index) => (
          <WorkRow key={project.slug} project={project} index={index} />
        ))}
      </ol>
    </section>
  );
}

export default WorkIndex;
