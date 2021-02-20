// Dependencies
import React from "react";
// Config/state
import designs from "../constants/designs";
// Components
import Griditem from "../components/atoms/Griditem";
import Layout from "../components/molecules/GLayout";
// Styles
import { Grid, Text, Spacer } from "@geist-ui/react";

const Designing = () => {
  return (
    <Layout title="Designing | Ken Van Damme">
      <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
        Whoever said money can't buy happiness simply didn't know where to go
        shopping.
      </Text>
      <Spacer y={2} />
      <Grid.Container gap={2} align="middle">
        {designs.map(design => (
          <Griditem
            key={design.title}
            title={design.title}
            link={design.redbubble}
            image={design.image}
            newWindow
          ></Griditem>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Designing;
