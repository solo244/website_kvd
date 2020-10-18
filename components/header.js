import styles from "../styles/modules/header.module.css";

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}
