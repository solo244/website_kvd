// Styles
import { Text, Link, Card, Grid } from "@geist-ui/react";

const HandyLink = ({ title, link, description, children }) => {
  return (
    <Grid xs={24} sm={12} md={8}>
      <Link
        href={link}
        target="_blank"
        style={{ display: "block", width: "100%" }}
      >
        <Card shadow>
          {children && <>{children}</>}
          <Text h4 style={{ marginBottom: "0" }}>
            {title}
          </Text>
          {description && (
            <Text type="secondary" small>
              {description}
            </Text>
          )}
        </Card>
      </Link>
    </Grid>
  );
};

export default HandyLink;
