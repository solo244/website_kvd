import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import { getSortedWritingsData } from "../lib/writings";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../styles/modules/layout.module.css";

export default function Writings({ data }) {
  return (
    <Layout>
      <Head>
        <title>Writings | Ken Van Damme</title>
      </Head>

      <Sidebar>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <h1>Writings</h1>
        <p>We can't help everyone, but everyone can help someone.</p>
        <Footer grid />
      </Sidebar>

      <Content grid>
        {data.map(({ title }) => {
          return <h1 key={title}>{title}</h1>;
        })}
      </Content>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getSortedWritingsData();
  return {
    props: {
      data,
    },
  };
}
