import styles from "../styles/modules/layout.module.css";

export default function Content({ children }) {
  return (
    <section className={`${styles.content} ${styles.flexgrid}`}>
      {children}
    </section>
  )
}
