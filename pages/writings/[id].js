import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";
import Footer from "../../components/footer";
import { getAllWritingIds, getWritingData } from "../../lib/writings";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../../styles/modules/layout.module.css";

export default function Writing({ writingData }) {
  return (
    <Layout>
      <Head>
        <title>{writingData.title}</title>
      </Head>

      <Sidebar side>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <span className={styles.spacer}> / </span>
        <Link href="/writings">
          <a className={styles.link}>Writings</a>
        </Link>
      </Sidebar>

      <Header style={writingData.category}>
        <h4>{writingData.category}: {writingData.title}</h4>
        <h1>{writingData.header}</h1>

        <aside>
          <span><Calendar size="20" />{writingData.date}</span>
          <span><Tag size="20" />{writingData.collection}</span>
        </aside>
      </Header>

      <Content>
        <section dangerouslySetInnerHTML={{ __html: writingData.contentHtml }}></section>
      </Content>

      <Footer />

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllWritingIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const writingData = await getWritingData(params.id);
  return {
    props: {
      writingData
    }
  }
}

