import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Footer from "../components/footer";
import tileStyles from "../styles/modules/tile.module.css";
import categoryStyles from "../styles/modules/category.module.css";
import { getSortedWritingsData } from "../lib/writings";
import { getSortedDesignsData } from "../lib/designs";
import { getSortedProjectsData } from "../lib/projects";
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
        {data.map(
          ({ slug, blank, title, category, filters, date, background }) => {
            return (
              <article key={slug} className={tileStyles.tile}>
                <Link href={`${slug}`}>
                  <a
                    className={`${tileStyles.tilelink} ${categoryStyles[category]}`}
                    target={`${blank ? "_blank" : "_self"}`}
                  >
                    {background ? (
                      <aside className={tileStyles.tileimage}>
                        <img src={`images/designs/${background}`} alt={title} />
                      </aside>
                    ) : (
                      <h4>
                        {category}
                        {filters && `: ${filters}`}
                      </h4>
                    )}
                    <span className={tileStyles.tiledate}>
                      <Calendar size="16" /> {date}
                    </span>
                    <h2>{title}</h2>
                  </a>
                </Link>
              </article>
            );
          }
        )}
      </Content>
    </Layout>
  );
}

export async function getStaticProps() {
  let data = [];
  const writings = getSortedWritingsData();
  const designs = getSortedDesignsData();
  const projects = getSortedProjectsData();
  writings.map(writing => data.push(writing));
  designs.map(design => data.push(design));
  projects.map(project => data.push(project));

  function dateToNum(d) {
    d = d.split("/");
    return Number(d[2] + d[1] + d[0]);
  }

  data.sort(function (a, b) {
    return dateToNum(b.date) - dateToNum(a.date);
  });

  return {
    props: { data: data },
  };
}
