import { categories } from '../../data/categories'
import styles from './Categories.module.css'

export function Categories() {
  return (
    <section id="categories" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossas Categorias</h2>
        <p className={styles.subtitle}>Soluções para cada objetivo de saúde</p>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <a key={cat.id} href={cat.href} className={styles.card}>
              <div
                className={styles.cardBg}
                style={{ background: cat.gradient }}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{cat.icon}</div>
                <h3 className={styles.cardName}>{cat.name}</h3>
                <p className={styles.cardDesc}>{cat.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
