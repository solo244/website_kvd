import styles from "../styles/modules/layout.module.css";

export default function Sidebar({ children, side }) {
  return (
    <>
      {side ? (
        <section className={styles.side}>
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
