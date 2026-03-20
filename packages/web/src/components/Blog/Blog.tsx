import { blogPosts } from '../../data/blogPosts'
import styles from './Blog.module.css'

export function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>Conteudo</div>
            <h2 className={styles.title}>Blog</h2>
          </div>
          <a href="#" className={styles.viewAll}>Ver todos &rarr;</a>
        </div>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <a key={post.id} href={post.href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.categoryTag}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Leia mais &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
