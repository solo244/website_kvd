import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import tileStyles from "../styles/modules/tile.module.css";
import categoryStyles from "../styles/modules/category.module.css";
import { getSortedWritingsData } from "../lib/writings";
import { Calendar } from "react-feather";

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>Ken Van Damme</title>
      </Head>

      <Sidebar>
        <h1>Lorem all the ipsums</h1>
        <p>
          Webdesigner, webdeveloper, teacher, gamer, moron, realist,
          procrastinator, fast talker, nerd, distracted by pretty colors. As a
          profession, I make web-stuff at{" "}
          <a href="https://www.mediasoft.be" className="link" target="_blank">
            Mediasoft
          </a>{" "}
          and{" "}
          <a href="https://www.weebit.be" className="link" target="_blank">
            Weebit
          </a>
          .
        </p>
        <Link href="/about">
          <a className={`button ${tileStyles.button}`}>More about me 😴</a>
        </Link>
        <Footer grid />
      </Sidebar>

      <Content grid>
        {data.map(({ slug, title, collection, date, category }) => {
          return (
            <article key={slug} className={tileStyles.tile}>
              <Link href={`/writings/${slug}`}>
                <a
                  className={`${tileStyles.tilelink} ${categoryStyles[category]}`}
                >
                  <h4>{collection}</h4>
                  <span className={tileStyles.tiledate}>
                    <Calendar size="16" /> {date}
                  </span>
                  <h2>{title}</h2>
                </a>
              </Link>
            </article>
          );
        })}
      </Content>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getSortedWritingsData();
  return {
    props: {
      data,
    },
  };
}
