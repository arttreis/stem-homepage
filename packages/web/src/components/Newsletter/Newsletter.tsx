import type { FormEvent } from 'react'
import styles from './Newsletter.module.css'

export function Newsletter() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Fique por dentro</h2>
        <p className={styles.subtitle}>
          Receba novidades, ofertas exclusivas e conteúdos sobre saúde e nutrição.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className={styles.input}
            required
            aria-label="Seu e-mail"
          />
          <button type="submit" className={styles.button}>Inscrever-se</button>
        </form>
        <p className={styles.privacy}>
          Ao se inscrever, você concorda com nossa Política de Privacidade. Sem spam, prometemos.
        </p>
      </div>
    </section>
  )
}
