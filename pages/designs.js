import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import { getSortedDesignsData } from "../lib/designs";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../styles/modules/layout.module.css";

export default function Designs({ data }) {
  return (
    <Layout>
      <Head>
        <title>Designs | Ken Van Damme</title>
      </Head>

      <Sidebar>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <h1>Designs</h1>
        <p>
          Whoever said money can't buy happiness simply didn't know where to go
          shopping.
        </p>
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
  const data = getSortedDesignsData();
  return {
    props: {
      data,
    },
  };
}
