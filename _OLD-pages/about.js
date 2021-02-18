import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Content from "../components/content";

export default function About() {
  return (
    <>
      <Layout about>
        <Head>
          <title>About | Ken Van Damme</title>
        </Head>
        <h1>About page</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
      <Content>
        <h2>Short Bio</h2>
        <h2>Timeline</h2>
        <h2>Worked with/comfortale with:</h2>
        <ul>
          <li>React</li>
          <li>Svelte</li>
          <li>Netlify</li>
        </ul>
        <h2>Trying to get better at:</h2>
        <ul>
          <li>Next.js</li>
        </ul>
        <h2>Still looking into:</h2>
        <ul>
          <li>Foresttry</li>
          <li>Vercel</li>
          <li></li>
        </ul>
      </Content>
    </>
  );
}
