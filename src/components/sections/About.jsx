import { siteContent } from '../../content.ts';

function About() {
  const { about } = siteContent;

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-layout page-shell">
        <figure className="about-photo">
        {about.photo.src ? (
          <img
            className="image-frame"
            src={about.photo.src}
            alt={about.photo.alt}
            width={about.photo.width}
            height={about.photo.height}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label={about.photo.alt}>
            {about.photo.alt}
          </div>
        )}
        <figcaption>{about.photo.caption}</figcaption>
      </figure>
        <div className="about-copy">
          <div className="section-heading">
            <h2 id="about-title">{about.title}</h2>
          </div>
          <p className="about-copy__intro">{about.paragraph}</p>
          <div className="about-lists">
            <div>
              <h3>{about.buildTitle}</h3>
              <ul>
                {about.buildList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{about.toolsTitle}</h3>
              {about.toolGroups.map((group) => (
                <div className="tool-group" key={group.label}>
                  <h4>{group.label}</h4>
                  <p>{group.tools.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
