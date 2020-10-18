import styles from "../styles/modules/layout.module.css";

export default function Sidebar({ children, side }) {
  return (
    <>
      {side ? (
        <section className={styles.side}>
          <h1>Side</h1>
          {children}
        </section>
      ) : (
        <section className={styles.sidebar}>
          <section className={styles.fixed}>
            {children}
          </section>
        </section>
      )}
    </>
  )
}
