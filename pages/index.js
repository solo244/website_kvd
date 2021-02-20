// Dependencies
import React from "react";
import NextLink from "next/link";
// Config/state
import designs from "../constants/designs";
import writings from "../constants/writings";
// Components
import Intro from "../components/atoms/Intro";
import Griditem from "../components/atoms/Griditem";
import Block from "../components/atoms/Block";
import Layout from "../components/molecules/GLayout";
// Styles
import { Button, Row, Spacer, Grid, Description } from "@geist-ui/react";
import User from "@geist-ui/react-icons/user";
import Code from "@geist-ui/react-icons/code";
import ImageIcon from "@geist-ui/react-icons/image";

const Homepage = () => {
  return (
    <Layout title="Ken Van Damme">
      <Grid.Container gap={2} justify="center">
        <Intro />
        <Grid xs={24} sm={10} md={14} style={{ display: "block" }}>
          <Spacer y={0.5} />
          <Description title="My writing" />
          {writings
            .slice(0, 3)
            .map(
              writing =>
                writing && (
                  <Block
                    key={writing.title}
                    title={writing.title}
                    type={writing.tag}
                    intro={writing.intro}
                    link={`/writings/${writing.link}`}
                  />
                )
            )}
          <Row justify="end">
            <NextLink href="/writing">
              <Button ghost type="secondary" auto>
                All writing 📚
              </Button>
            </NextLink>
          </Row>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
      <Grid.Container gap={2} justify="center">
        <Griditem
          title="About me"
          link="about"
          linktext="Learn more about me"
          description="I like designing my own stuff for print"
        >
          <User />
        </Griditem>
        <Griditem
          title="Coding stuff"
          link="coding"
          linktext="Look at my coding stuff"
          description="I like designing my own stuff for print"
        >
          <Code />
        </Griditem>
        <Griditem
          title="Designing for print"
          link="designing"
          linktext="Explore all my designs"
          description="I like designing my own stuff for print"
        >
          <ImageIcon />
        </Griditem>
      </Grid.Container>
    </Layout>
  );
};

export default Homepage;
