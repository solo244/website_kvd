// Styles
import { Grid, Row, Card, Progress, Spacer, Link } from "@geist-ui/react";
import Check from "@geist-ui/react-icons/check";

const Skill = ({ title, progress, link }) => {
  return (
    <Grid xs={24} sm={12} md={8} lg={6}>
      <Link
        href={link}
        target="_blank"
        style={{ display: "block", width: "100%" }}
      >
        <Card shadow>
          {progress === 100 ? (
            <Grid.Container align="middle">
              <Check />
              <Spacer w={0.5} />
              {title}
            </Grid.Container>
          ) : (
            <>
              {title}
              {progress && <Progress value={progress} />}
            </>
          )}
        </Card>
      </Link>
    </Grid>
  );
};

export default Skill;
