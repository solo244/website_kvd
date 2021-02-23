// Dependencies
import ProgressBar from "react-scroll-progress-bar";
import { readingTime } from "reading-time-estimator";
// Components
import Breadcrumb from "../../components/atoms/Breadcrumb";
import Layout from "../molecules/Layout";
// Styles
import { Text, Spacer, Tag, Row } from "@geist-ui/react";

const Blog = ({ title, content }) => {
  let all = "";
  content.props.children.map(child => (all += child.props.children));
  const time = readingTime(all, 200);

  return (
    <>
      <ProgressBar height="6px" bgcolor="#f5a623" duration="0.2" />
      <Layout title={`${title} | Writing | Ken Van Damme`}>
        <Row justify="center" align="middle">
          <Text small style={{ color: "#aaa" }}>
            {time.text === "min read" ? `1 ${time.text}` : time.text}
          </Text>
        </Row>
        <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
          {title}
        </Text>
        <Row justify="center" align="middle">
          <Tag type="error">Tutorials</Tag>
        </Row>
        <Spacer y={2} />
        <Breadcrumb title="A simple website" />
        <Spacer y={2} />
        {content}
      </Layout>
    </>
  );
};

export default Blog;
