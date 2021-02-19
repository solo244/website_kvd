// Dependencies
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
// Config/state
import menu from "../../constants/menu";
// Components
import Logo from "../../images/logo";
// Styles
import { Grid, Link, Row, Col, Spacer, Text } from "@geist-ui/react";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Grid.Container gap={2} align="middle">
        <Grid>
          <NextLink href="/">
            <Link>
              <Logo />
            </Link>
          </NextLink>
        </Grid>
        <Grid xs justify="end">
          <Row justify="end" align="middle">
            {menu.map(link => (
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
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </>
  );
};

export default Header;
