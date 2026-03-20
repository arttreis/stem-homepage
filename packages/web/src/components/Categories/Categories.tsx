import { categories } from '../../data/categories'
import styles from './Categories.module.css'

const iconBgs: Record<string, string> = {
  beauty: '#FDE8F4',
  clinical: '#E8F4FD',
  nutrition: '#E8F9EB',
  performance: '#FFF0E8',
}

export function Categories() {
  return (
    <section id="categories" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Categorias</span>
        <h2 className={styles.title}>Solucoes para cada objetivo</h2>
        <p className={styles.subtitle}>
          Encontre o suplemento ideal para o seu estilo de vida
        </p>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <a key={cat.id} href={cat.href} className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{ background: iconBgs[cat.id] ?? '#f0f0f0' }}
              >
                {cat.icon}
              </div>
              <div>
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
