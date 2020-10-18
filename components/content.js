import styles from "../styles/modules/layout.module.css";

export default function Content({ children, grid }) {
  return (
    <>
      {grid ? (
        <section className={`${styles.content} ${styles.flexgrid}`}>
          {children}
        </section>
      ) : (
        <section className={styles.container}>
          {children}
        </section>
      )}
    </>
  )
}
