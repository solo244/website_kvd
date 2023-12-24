// Dependencies
import ProgressBar from "react-scroll-progress-bar";
import { readingTime } from "reading-time-estimator";
// Components
import Breadcrumb from "../../components/atoms/Breadcrumb";
import Layout from "../molecules/Layout";
// Styles
import { Text, Spacer, Grid, Tag, Row } from "@geist-ui/react";

const Blog = ({ title, content, type }) => {
  let all = "";
  content.props.children.map(child => (all += child.props.children));
  const time = readingTime(all, 200);
  const typeStyle =
    type === "What Did I Google Today"
      ? "warning"
      : type === "Brainfarts"
      ? "success"
      : type === "Tutorials"
      ? "error"
      : "lite";

  return (
    <>
      <ProgressBar height="6px" bgcolor="#f5a623" duration="0.2" />
      <Layout title={`${title} | Writing | Ken Van Damme`}>
        <Grid.Container justify="center" align="middle">
          <Text small style={{ color: "#aaa" }}>
            {time.text === "min read" ? `1 ${time.text}` : time.text}
          </Text>
        </Grid.Container>
        <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
          {title}
        </Text>
        <Grid.Container justify="center" align="middle">
          <Tag type={typeStyle}>{type}</Tag>
        </Grid.Container>
        <Spacer h={2} />
        <Breadcrumb title="A simple website" />
        <Spacer h={2} />
        {content}
      </Layout>
    </>
  );
};

export default Blog;
