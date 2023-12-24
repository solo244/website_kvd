// Dependencies
import NextLink from "next/link";
// Styles
import { Text, Link, Col, Card, Image, Grid } from "@geist-ui/react";

const Griditem = ({
  title,
  link,
  linktext = "",
  image,
  description,
  newWindow,
  children,
}) => {
  return (
    <Grid xs={24} sm={12} md={8}>
      <Card shadow width="100%">
        {children ? (
          <>{children}</>
        ) : (
          <Image
            src={image || "/images/designs/design1.jpg"}
            style={{ objectFit: "cover" }}
          />
        )}
        <Text h4 style={{ marginBottom: "0" }}>
          {title}
        </Text>
        {description && (
          <Text type="secondary" small>
            {description}
          </Text>
        )}
        <Card.Footer>
          <NextLink href={link}>
            <Link block target={newWindow ? "_blank" : "_self"} href={link}>
              {linktext !== "" ? linktext : "Buy this design on Redbubble"}
            </Link>
          </NextLink>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default Griditem;
