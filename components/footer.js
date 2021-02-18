// Dependencies
import React from "react";
// Config/state
import get from "../utils/get";
// Styles
import { Link, Row, Col, Spacer, Text, Divider } from "@geist-ui/react";
import Github from "@geist-ui/react-icons/github";
import Twitter from "@geist-ui/react-icons/twitter";

const Footer = () => {
  return (
    <>
      <Spacer y={3} />
      <Row gap={2}>
        <Col>
          <Divider />
          <Spacer y={2} />
          <Row align="middle" justify="space-between">
            <Col>
              <Text small>
                © {get.date()} <strong>Ken Van Damme</strong>
              </Text>
            </Col>
            <Col>
              <Row justify="center">
                <Text small>No 🍪 cookies, 💰 ads or ❗pop-ups.</Text>
              </Row>
            </Col>
            <Col>
              <Row justify="end">
                <Link color href="https://github.com/solo244" target="_blank">
                  <Github />
                </Link>
                <Spacer x={0.5} />
                <Link
                  color
                  href="https://twitter.com/Elsolo244"
                  target="_blank"
                >
                  <Twitter />
                </Link>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
