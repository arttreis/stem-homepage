import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>O que dizem sobre nós</h2>
        <p className={styles.subtitle}>Profissionais e clientes que confiam na Stem</p>
        <div className={styles.slider}>
          {testimonials.map((t) => (
            <article key={t.id} className={styles.card}>
              <div className={styles.quote}>&ldquo;</div>
              <p className={styles.content}>{t.content}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
