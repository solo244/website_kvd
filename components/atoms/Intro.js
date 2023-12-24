// Dependencies
import NextLink from "next/link";
// Styles
import { Grid, Text, Button, Link, Tag, Spacer } from "@geist-ui/react";
import Download from "@geist-ui/react-icons/download";

const Intro = () => {
  return (
    <Grid xs={24} sm={14} md={10} style={{ display: "block" }}>
      <Text h1 style={{ lineHeight: 1 }}>
        Lorem all the ipsums
      </Text>
      <Tag>- "Ken Van Damme"</Tag>
      <Spacer h={0.5} />
      <Text p>
        Webdesigner, webdeveloper, teacher, gamer, moron, realist,
        procrastinator, fast talker, nerd, distracted by pretty colors. As a
        profession, I make web-stuff at{" "}
        <Link
          icon
          color
          underline
          href="https://www.mediasoft.be"
          target="_blank"
        >
          Mediasoft
        </Link>
        ,{" "}
        <Link
          icon
          color
          underline
          href="https://www.makeitfly.group"
          target="_blank"
        >
          Make It Fly
        </Link>{" "}
        and{" "}
        <Link icon color underline href="https://www.weebit.be" target="_blank">
          Weebit
        </Link>
        . For fun, I create{" "}
        <NextLink href="/coding">
          <Link color underline>
            code-stuff
          </Link>
        </NextLink>{" "}
        and make my own{" "}
        <NextLink href="/designing">
          <Link color underline>
            designs
          </Link>
        </NextLink>
        .
      </Text>
      <Spacer h={1} />
      <NextLink href="/images/KenVanDamme-Curriculum Vitae.pdf" target="_blank">
        <Button auto type="secondary" icon={<Download />}>
          My CV
        </Button>
      </NextLink>
    </Grid>
  );
};

export default Intro;
