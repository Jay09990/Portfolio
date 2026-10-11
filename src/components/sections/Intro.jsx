import { siteContent } from '../../content.ts';

function Intro() {
  const { identity, intro } = siteContent;

  return (
    <section className="intro page-shell" id="top" aria-labelledby="intro-title">
      <div className="intro__main">
        <h1 id="intro-title">
          {intro.statement}
          <span>{intro.secondLine}</span>
        </h1>
        <p className="intro__copy">{intro.paragraph}</p>
        <a className="text-link" href="#design">
          {intro.linkLabel}
        </a>
      </div>
      <aside className="intro__details" aria-label={intro.detailsLabel}>
        <p>{intro.location}</p>
        <p>{identity.availability}</p>
        <a href={`mailto:${identity.email}`}>{identity.email}</a>
        <a href={identity.resume}>{siteContent.labels.resume}</a>
      </aside>
    </section>
  );
}

export default Intro;
