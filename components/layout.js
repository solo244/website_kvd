// Dependencies
import React from "react";
import Head from "next/head";
// Components
import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";
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
