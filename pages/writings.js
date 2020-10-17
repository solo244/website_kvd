import Head from 'next/head';
import Link from 'next/link';
import { getSortedWritingsData } from "../lib/writings";

export default function Writings({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Writings | Ken Van Damme</title>
      </Head>

      <Link href="/"><a>Back home!</a></Link>

      {data.map(({ title }) => {
        return (
          <h1>{title}</h1>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const data = getSortedWritingsData();
  return {
    props: {
      data
    }
  }
}
