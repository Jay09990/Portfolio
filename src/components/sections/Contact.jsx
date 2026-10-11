import { siteContent } from '../../content.ts';

function Contact() {
  const { identity } = siteContent;
  const { contact } = siteContent;
  const { labels } = siteContent;

  return (
    <section
      className="contact-section page-shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div>
        <h2 id="contact-title">{contact.title}</h2>
      </div>
      <div className="contact-details">
        <a
          className="contact-email text-link"
          href={`mailto:${identity.email}`}
          aria-label={contact.emailLabel}
        >
          {identity.email}
        </a>
        <div className="contact-links">
          {identity.linkedin ? (
            <a className="text-link" href={identity.linkedin}>
              {labels.linkedIn}
            </a>
          ) : (
            <p>{labels.linkedIn}: {contact.linkedinTodo}</p>
          )}
          <a className="text-link" href={identity.github}>
            {labels.github}
          </a>
          <a className="text-link" href={`tel:${identity.phone.replaceAll(' ', '')}`}>
            {labels.phone}: {identity.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
