import Layout from "../../components/layout";
import { getAllWritingIds, getWritingData } from "../../lib/writings";

export default function Writing({ writingData }) {
  return (
    <Layout>
      {writingData.title}
      <br />
      {writingData.id}
      <br />
      {writingData.date}
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
  const writingData = getWritingData(params.id)
  return {
    props: {
      writingData
    }
  }
}

