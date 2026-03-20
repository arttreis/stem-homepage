import { categories } from '../../data/categories'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Categories.module.css'

export function Categories() {
  const ref = useFadeIn<HTMLElement>()

  return (
    <section id="categories" className={`${styles.section} fadeInUp`} ref={ref}>
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
                <span className={styles.cardArrow}>Explorar &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
