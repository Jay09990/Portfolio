import { siteContent } from '../../content.ts';

function Footer() {
  const { identity, labels, contact } = siteContent;
  const { copyright, backToTop, resumeLabel } = siteContent.footer;

  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <p>{copyright}</p>
        <nav aria-label={labels.footerNavigation}>
          <a href={identity.resume}>{resumeLabel}</a>
          <a href={identity.github}>{labels.github}</a>
          {identity.linkedin ? (
            <a href={identity.linkedin}>{labels.linkedIn}</a>
          ) : (
            <span>{contact.linkedinTodo}</span>
          )}
          <a href="#top">{backToTop}</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
