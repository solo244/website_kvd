// Dependencies
import React from "react";
// Config/state
import get from "../../utils/get";
// Styles
import { Link, Grid, Spacer, Text, Divider } from "@geist-ui/react";
import Github from "@geist-ui/react-icons/github";
import Twitter from "@geist-ui/react-icons/twitter";

const Footer = () => {
  return (
    <>
      <Spacer h={2} />
      <Divider />
      <Spacer h={2} />
      <Grid.Container gap={2} align="middle">
        <Grid xs={24} sm={7}>
          <Text small>
            © {get.date()} <strong>Ken Van Damme</strong>
          </Text>
        </Grid>
        <Grid xs={24} sm={14} justify="center">
          <Text small>No 🍪 cookies, 💰 ads or ❗pop-ups.</Text>
        </Grid>
        <Grid xs={24} sm={3} justify="end">
          <Link
            color
            href="https://github.com/solo244"
            target="_blank"
            name="Github"
          >
            <Github />
          </Link>
          <Spacer w={0.5} />
          <Link
            color
            href="https://twitter.com/Elsolo244"
            target="_blank"
            name="Twitter"
          >
            <Twitter />
          </Link>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Footer;
