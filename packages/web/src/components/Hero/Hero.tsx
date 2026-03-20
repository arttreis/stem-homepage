import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Suplementos que transformam</h1>
        <p className={styles.sub}>
          Líder em vendas no Brasil. Ciência, qualidade e resultados em cada produto.
        </p>
        <a href="#products" className={styles.cta}>Conheça nossos produtos</a>
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            <span>Qualidade Garantida</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="22" height="18" rx="0"/>
                <path d="M1 10h22"/>
              </svg>
            </span>
            <span>Até 6x sem juros</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
            <span>Frete Grátis +R$199</span>
          </div>
        </div>
      </div>
    </section>
  )
}
