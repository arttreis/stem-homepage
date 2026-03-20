import { products } from '../../data/products'
import styles from './ProductShelf.module.css'

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function ProductShelf() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Mais Vendidos</h2>
        <a href="#" className={styles.viewAll}>Ver todos &rarr;</a>
      </div>
      <div className={styles.shelf}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
                loading="lazy"
              />
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
            </div>
            <span className={styles.category}>{product.category}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
