import { useState, useRef } from 'react'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function scrollTo(index: number) {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.children[index] as HTMLElement | undefined
    if (card) {
      slider.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  function handleScroll() {
    const slider = sliderRef.current
    if (!slider) return
    const scrollLeft = slider.scrollLeft
    const cardWidth = (slider.children[0] as HTMLElement | undefined)?.offsetWidth ?? 360
    setActiveIndex(Math.round(scrollLeft / (cardWidth + 24)))
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Depoimentos</span>
        <h2 className={styles.title}>O que dizem sobre nos</h2>
        <p className={styles.subtitle}>Profissionais e clientes que confiam na Stem</p>
        <div className={styles.slider} ref={sliderRef} onScroll={handleScroll}>
          {testimonials.map((t) => (
            <article key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {'★★★★★'}
              </div>
              <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>
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
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
