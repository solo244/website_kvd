import Head from "next/head";
import styles from "../styles/modules/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <meta itemprop="name" content="" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className={styles.flex}>{children}</section>
    </>
  );
}
