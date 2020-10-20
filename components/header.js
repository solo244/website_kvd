import styles from "../styles/modules/header.module.css";

export default function Header({ children, style }) {
  return (
    <header className={`${styles.header} ${styles[style]}`}>
      <section className={styles.container}>
        {children}
      </section>
    </header>
  )
}
