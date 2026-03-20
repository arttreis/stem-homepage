import { professionals } from '../../data/professionals'
import styles from './Professionals.module.css'

export function Professionals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <span className={styles.label}>Especialistas</span>
        </div>
        <h2 className={styles.title}>Nossos Especialistas</h2>
        <p className={styles.subtitle}>Profissionais que recomendam e confiam na Stem</p>
        <div className={styles.grid}>
          {professionals.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.avatar}>{p.avatar}</div>
              <h3 className={styles.name}>{p.name}</h3>
              <div className={styles.specialty}>{p.specialty}</div>
              <div className={styles.credentials}>{p.credentials}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
