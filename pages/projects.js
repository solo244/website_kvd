import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import { getSortedProjectsData } from "../lib/projects";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../styles/modules/layout.module.css";

export default function Projects({ data }) {
  return (
    <Layout>
      <Head>
        <title>Projects | Ken Van Damme</title>
      </Head>

      <Sidebar>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <h1>Projects</h1>
        <p>
          Comic Sans is never an acceptable font. Unless you are an 8 year old
          girl writing a poem about unicorns.
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
  const data = getSortedProjectsData();
  return {
    props: {
      data,
    },
  };
}
