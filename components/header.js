// Dependencies
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
// Config/state
import links from "../constants/links";
// Components
import Logo from "../images/logo";
// Styles
import { Link, Row, Col, Spacer, Text } from "@geist-ui/react";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Row gap={2} align="middle">
        <Col>
          <NextLink href="/">
            <Link>
              <Logo />
            </Link>
          </NextLink>
        </Col>
        <Col>
          <Row justify="end">
            {links.map(link => (
              <NextLink href={link.path} key={link.path}>
                {router.pathname === link.path ? (
                  <Text b type="secondary">
                    <Link block>{link.label}</Link>
                  </Text>
                ) : (
                  <Link block>{link.label}</Link>
                )}
              </NextLink>
            ))}
          </Row>
        </Col>
      </Row>
      <Spacer y={3} />
    </>
  );
};

export default Header;
