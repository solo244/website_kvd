import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Content from "../../components/content";
import Footer from "../../components/footer";
import { getAllProjectsIds, getProjectsData } from "../../lib/projects";
import { CornerUpLeft, Tag, Calendar } from "react-feather";
import styles from "../../styles/modules/layout.module.css";

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <Sidebar side>
        <CornerUpLeft size="16" className={styles.back} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <span className={styles.spacer}> / </span>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
      </Sidebar>

      <Header style={projectData.category}>
        <h4>
          {projectData.category}: {projectData.title}
        </h4>
        <h1>{projectData.header}</h1>

        <aside>
          <span>
            <Calendar size="20" />
            {projectData.date}
          </span>
          <span>
            <Tag size="20" />
            {projectData.collection}
          </span>
        </aside>
      </Header>

      <Content>
        <section
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
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
  const projectData = await getprojectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
