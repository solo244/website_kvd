// Config/state
import links from "../../constants/links";
// Components
import HandyLink from "./HandyLink";
// Styles
import { Text, Spacer, Grid } from "@geist-ui/react";

const TabLinks = () => {
  return (
    <>
      <Text p>
        Here you can find a <strong>hand</strong>ful of useful links that I keep
        coming back to in my job/free time.
      </Text>
      <Spacer h={2} />
      <Text h3>You never know when these will come in handy 😉</Text>
      <Grid.Container gap={2}>
        {links.map(
          link =>
            link.progress !== 100 && (
              <HandyLink
                key={link.title}
                title={link.title}
                description={link.description}
                link={link.link}
              >
                {link.icon && (
                  <div className="link-icon">
                    <link.icon />
                  </div>
                )}
              </HandyLink>
            )
        )}
      </Grid.Container>
    </>
  );
};

export default TabLinks;
