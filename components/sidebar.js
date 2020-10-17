import styles from "../styles/modules/layout.module.css";

export default function Sidebar({ children }) {
  return (
    <section className={styles.sidebar}>
      <section className={styles.fixed}>
        {children}
      </section>
    </section>
  )
}
