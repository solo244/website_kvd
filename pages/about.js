import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>About | Ken Van Damme</title>
      </Head>
      <h1>About page</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  )
}
