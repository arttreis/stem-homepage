import { useState } from 'react'
import { navItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  function isActive(href: string) {
    if (href === '#') return activeSection === ''
    return href === `#${activeSection}`
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>STEM</a>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#products" className={styles.headerCta}>Comprar</a>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#products"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Comprar
        </a>
      </nav>
    </header>
  )
}
