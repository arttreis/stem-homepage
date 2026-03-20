import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <span className={styles.imagePlaceholder}>STEM</span>
        </div>
        <div>
          <span className={styles.label}>Quem Somos</span>
          <h2 className={styles.title}>Ciência e inovação a serviço da sua saúde</h2>
          <p className={styles.text}>
            A Stem nasceu com a missão de democratizar o acesso a suplementos de alta
            qualidade no Brasil. Com formulações baseadas em evidências científicas e
            matérias-primas importadas, oferecemos produtos que realmente fazem a diferença.
          </p>
          <p className={styles.text}>
            Nossa equipe de pesquisadores e nutricionistas trabalha incansavelmente para
            trazer as melhores inovações da nutrição mundial para o mercado brasileiro.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>+500</span>
              <span className={styles.statLabel}>Produtos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>+2M</span>
              <span className={styles.statLabel}>Clientes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Anos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
