import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            &#x2714; Lider em suplementos no Brasil
          </span>
          <h1 className={styles.headline}>
            Suplementos que{' '}
            <span className={styles.headlineAccent}>transformam</span> sua saude
          </h1>
          <p className={styles.sub}>
            Formulacoes baseadas em ciencia, com materias-primas premium
            e resultados comprovados. Descubra a diferenca Stem.
          </p>
          <a href="#products" className={styles.cta}>
            Conheca nossos produtos
            <span className={styles.ctaArrow}>&rarr;</span>
          </a>
        </div>
        <div className={styles.visual}>
          <div className={styles.heroImage}>
            <span className={styles.heroImageText}>STEM</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.floatingCard1}`}>
            <span className={`${styles.floatingIcon} ${styles.floatingIconGreen}`}>
              &#x2714;
            </span>
            <div>
              <strong>+2M clientes</strong>
              <br />
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>satisfeitos</span>
            </div>
          </div>
          <div className={`${styles.floatingCard} ${styles.floatingCard2}`}>
            <span className={`${styles.floatingIcon} ${styles.floatingIconBlue}`}>
              &#9733;
            </span>
            <div>
              <strong>4.9/5 estrelas</strong>
              <br />
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>avaliacoes</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trustRow}>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span className={styles.trustText}>Qualidade Garantida</span>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
          </div>
          <span className={styles.trustText}>Ate 6x sem juros</span>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </div>
          <span className={styles.trustText}>Frete Gratis acima de R$199</span>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <span className={styles.trustText}>Entrega para todo Brasil</span>
        </div>
      </div>
    </section>
  )
}
