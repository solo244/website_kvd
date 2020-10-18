import Head from "next/head";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";
import { getAllWritingIds, getWritingData } from "../../lib/writings";

export default function Writing({ writingData }) {
  return (
    <Layout>
      <Head>
        <title>{writingData.title}</title>
      </Head>

      <Sidebar side>

      </Sidebar>

      <Header>
        <h4>{writingData.category}: {writingData.title}</h4>
        <h1>{writingData.header}</h1>

        {writingData.date}
        <br />
        {writingData.collection}
      </Header>

      <Content>
        <section dangerouslySetInnerHTML={{ __html: writingData.contentHtml }}></section>
      </Content>

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

