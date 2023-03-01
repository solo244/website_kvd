// Dependencies
import NextLink from "next/link";
// Styles
import { Text, Row, Card, Spacer, Tag, Link } from "@geist-ui/react";

const Block = ({ title, type, intro, link }) => {
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
      <NextLink href={link}>
        <Link style={{ display: "block", width: "100%" }}>
          <Card shadow hoverable>
            <Text h4 style={{ marginBottom: "0", lineHeight: "1.25" }}>
              {title}
            </Text>
            <Spacer y={0.5} />
            <Row>
              <Tag type={typeStyle}>{type}</Tag>
            </Row>
            <Spacer y={0.5} />
            <Text type="secondary" small>
              {intro}
            </Text>
          </Card>
        </Link>
      </NextLink>
      <Spacer y={1} />
    </>
  );
};

export default Block;
