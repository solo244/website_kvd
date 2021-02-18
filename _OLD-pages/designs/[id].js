import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";
import Footer from "../../components/footer";
import { getAllDesignsIds, getDesignsData } from "../../lib/designs";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../../styles/modules/layout.module.css";

export default function Design({ designData }) {
  return (
    <Layout>
      <Head>
        <title>{designData.title}</title>
      </Head>

      <Sidebar side>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <span className={styles.spacer}> / </span>
        <Link href="/designs">
          <a className={styles.link}>Designs</a>
        </Link>
      </Sidebar>

      <Header style={designData.category}>
        <h4>
          {designData.category}: {designData.title}
        </h4>
        <h1>{designData.header}</h1>

        <aside>
          <span>
            <Calendar size="20" />
            {designData.date}
          </span>
          <span>
            <Tag size="20" />
            {designData.collection}
          </span>
        </aside>
      </Header>

      <Content>
        <section
          dangerouslySetInnerHTML={{ __html: designData.contentHtml }}
        ></section>
      </Content>

      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllWritingIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const designData = await getdesignData(params.id);
  return {
    props: {
      designData,
    },
  };
}
