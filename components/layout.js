import Head from "next/head";
import styles from "../styles/modules/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <section className={styles.flex}>{children}</section>
    </>
  );
}
