import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../../content.ts';

function Header() {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { identity, navigation, accessibility, labels } = siteContent;

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !menuOpen) return undefined;

    const summary = menu.querySelector('summary');
    const links = [...menu.querySelectorAll('a')];
    links[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        menu.open = false;
        setMenuOpen(false);
        summary?.focus();
        return;
      }

      if (event.key !== 'Tab' || links.length === 0) return;
      const first = links[0];
      const last = links[links.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a className="wordmark" href="#top">
          {identity.name}
        </a>
        <nav className="desktop-nav" aria-label={labels.mainNavigation}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={identity.resume}>{labels.resume}</a>
        </nav>
        <details
          className="mobile-menu"
          ref={menuRef}
          onToggle={(event) => setMenuOpen(event.currentTarget.open)}
        >
          <summary aria-label={accessibility.menuLabel}>
            {accessibility.menuLabel}
          </summary>
          <nav
            className="mobile-menu__panel"
            aria-label={labels.mobileNavigation}
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href={identity.resume} onClick={closeMenu}>
              {labels.resume}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export default Header;
