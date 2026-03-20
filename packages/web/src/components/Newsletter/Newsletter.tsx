import type { FormEvent } from 'react'
import styles from './Newsletter.module.css'

export function Newsletter() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <h2 className={styles.title}>Fique por dentro</h2>
        <p className={styles.subtitle}>
          Receba novidades, ofertas exclusivas e conteudos sobre saude e nutricao direto no seu e-mail.
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
          Ao se inscrever, voce concorda com nossa Politica de Privacidade. Sem spam.
        </p>
      </div>
    </section>
  )
}
