// Dependencies
import React from "react";
// Config/state
import codings from "../constants/codings";
// Components
import Griditem from "../components/atoms/Griditem";
import Layout from "../components/molecules/Layout";
// Styles
import { Grid, Text, Spacer } from "@geist-ui/react";

const Coding = () => {
  return (
    <Layout title="Coding | Ken Van Damme">
      <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
        Comic Sans is never an acceptable font. Unless you are an 8 year old
        girl writing a poem about unicorns.
      </Text>
      <Spacer h={2} />
      <Grid.Container gap={2}>
        {codings.map(coding => (
          <Griditem
            key={coding.title}
            title={coding.title}
            link={coding.link}
            linktext={coding.linktext}
            description={coding.description}
            newWindow
          >
            <coding.icon />
          </Griditem>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Coding;
