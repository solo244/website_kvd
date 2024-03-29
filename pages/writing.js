// Dependencies
import React, { useState } from "react";
// Config/state
import categories from "../constants/categories";
import writings from "../constants/writings";
// Components
import Block from "../components/atoms/Block";
import Layout from "../components/molecules/Layout";
// Styles
import { Text, Button, Row, Spacer, Grid, Note, Badge } from "@geist-ui/react";
import { useEffect } from "react";

const Writing = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const update = writings.filter(
      writing => selected.label === "All" || selected.label === writing.tag
    );
    setFiltered(update);
  }, [selected]);

  return (
    <Layout title="Writing | Ken Van Damme">
      <Grid.Container justify="center">
        <Spacer h={2} />
        <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
          We can't help everyone, but everyone can help someone.
        </Text>
        <Spacer h={2} />
      </Grid.Container>
      <Spacer h={2} />
      <Grid.Container justify="center">
        {categories.map(category => (
          <React.Fragment key={category.link}>
            <Spacer w={0.2} />
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
            <Spacer w={0.2} />
          </React.Fragment>
        ))}
      </Grid.Container>
      <Spacer h={2} />
      <Text style={{ textAlign: "center" }} h3 type={selected.type}>
        {filtered.length > 0 && (
          <Badge.Anchor>
            <Badge
              size="small"
              style={{ position: "relative", top: "6px", right: "-11px" }}
            >
              {filtered.length}
            </Badge>
            Looking at: {selected.label}{" "}
          </Badge.Anchor>
        )}
      </Text>
      <Spacer h={2} />
      <Grid.Container gap={2} justify="center">
        {filtered.map(writing => (
          <Grid
            key={writing.title}
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "block",
              paddingBottom: "0",
              paddingTop: "0",
            }}
          >
            <Block
              title={writing.title}
              type={writing.tag}
              intro={writing.intro}
              link={`/writings/${writing.link}`}
            />
          </Grid>
        ))}
        {filtered.length <= 0 && (
          <Note label={false} small>
            Found nothing with the label <strong>{selected.label}</strong> 😭
          </Note>
        )}
      </Grid.Container>
    </Layout>
  );
};

export default Writing;
