// Dependencies
import React, { useState } from "react";
// Config/state
import categories from "../constants/categories";
import writings from "../constants/writings";
// Components
import Block from "../components/atoms/Block";
import Layout from "../components/molecules/Layout";
// Styles
import { Text, Button, Row, Spacer, Grid } from "@geist-ui/react";

const Writing = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <Layout title="Writing | Ken Van Damme">
      <Row justify="center">
        <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
          We can't help everyone, but everyone can help someone.
        </Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        {categories.map(category => (
          <React.Fragment key={category.link}>
            <Spacer x={0.2} />
            <Button
              auto
              size="mini"
              type={category.type}
              disabled={selected.link === category.link.toLocaleLowerCase()}
              ghost={selected.link !== category.link.toLocaleLowerCase()}
              onClick={() => setSelected(category)}
            >
              {category.label}
            </Button>
            <Spacer x={0.2} />
          </React.Fragment>
        ))}
      </Row>
      <Spacer y={2} />
      <Text style={{ textAlign: "center" }} h3 type={selected.type}>
        Looking at: {selected.label}
      </Text>
      <Spacer y={2} />
      <Grid.Container gap={2} justify="center">
        {writings.map(writing => (
          <Grid
            key={writing.title}
            xs={24}
            sm={12}
            md={8}
            style={{ display: "block", paddingBottom: "0", paddingTop: "0" }}
          >
            <Block
              title={writing.title}
              type={writing.tag}
              intro={writing.intro}
              link={`/writings/${writing.link}`}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Writing;
