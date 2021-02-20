// Dependencies
import React from "react";
import Head from "next/head";
// Components
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
// Styles
import { Page } from "@geist-ui/react";

const Layout = ({ title, children }) => {
  return (
    <Page>
      <Head>
        <Meta />
        <title>{title || "Ken Van Damme"}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Page>
  );
};

export default Layout;
