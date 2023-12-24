// Dependencies
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
// Config/state
import menu from "../../constants/menu";
// Components
import Logo from "../../images/logo";
// Styles
import { Grid, Link, Spacer, Text } from "@geist-ui/react";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Grid.Container gap={2} align="middle">
        <Grid>
          <NextLink href="/" name="Logo Ken Van Damme">
            <Link name="Logo Ken Van Damme">
              <Logo />
            </Link>
          </NextLink>
        </Grid>
        <Grid xs justify="end">
          {menu.map(link => (
            <NextLink href={link.path} key={link.path}>
              {router.pathname === link.path ? (
                <Text b type="secondary">
                  <Link href={link.path} block>
                    {link.label}
                  </Link>
                </Text>
              ) : (
                <Link href={link.path} block>
                  {link.label}
                </Link>
              )}
            </NextLink>
          ))}
        </Grid>
      </Grid.Container>
      <Spacer h={3} />
    </>
  );
};

export default Header;
