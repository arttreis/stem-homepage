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
      </div>
    </section>
  )
}
