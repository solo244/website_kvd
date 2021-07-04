// Dependencies
import NextLink from "next/link";
// Styles
import { Breadcrumbs, Divider, Link } from "@geist-ui/react";

const Breadcrumb = ({ title }) => {
  return (
    <Divider>
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <NextLink href="/">
            <Link color>Home</Link>
          </NextLink>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <NextLink href="/writing">
            <Link color>Writing</Link>
          </NextLink>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>{title}</Breadcrumbs.Item>
      </Breadcrumbs>
    </Divider>
  );
};

export default Breadcrumb;
