import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import styles from "../styles/modules/tile.module.css";
import { getSortedWritingsData } from "../lib/writings";

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>Ken Van Damme</title>
      </Head>

      <Sidebar>
        <h1>Lorem all the ipsums</h1>
        <p>Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. As a profession, I make web-stuff at Mediasoft and Weebit.</p>
        <Link href="/about">
          <a>More about me 😴</a>
        </Link>
      </Sidebar>

      <Content className={styles.flex}>
        {data.map(({ slug, title, collection, date, category }) => {
          return (
            <article
              key={slug}
              className={styles.tile}
            >
              <Link href={`/writings/${slug}`}>
                <a className={`${styles.tilelink} ${category}`}>
                  <h4>{collection}</h4>
                  <span>{date}</span>
                  <h2>{title}</h2>
                </a>
              </Link>
            </article>
          )
        })}
      </Content>
{/* 
---
slug: floats-and-clears-1
title: Floats and clears 1
header: Positioning your elements via floating. Incoming problems...
collection: CSS Introductions
category: Tutorial
filters: CSS
date: 13 July 2015
icons: google_css.svg
folder: writing */}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = getSortedWritingsData()
  return {
    props: {
      data
    }
  }
}
