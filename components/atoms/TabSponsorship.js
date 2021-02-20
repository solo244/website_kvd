// Config/state
import supports from "../../constants/supports";
// Components
import HandyLink from "./HandyLink";
// Styles
import { Text, Spacer, Grid } from "@geist-ui/react";

const TabSponsorship = () => {
  return (
    <>
      <Text p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Spacer y={2} />
      <Text h3>Thank you 😊</Text>
      <Grid.Container gap={2}>
        {supports.map(
          support =>
            !support.disabled && (
              <HandyLink
                key={support.title}
                title={support.title}
                description={support.description}
                link={support.link}
              >
                {support.icon && (
                  <div className="support-icon">
                    <support.icon />
                  </div>
                )}
              </HandyLink>
            )
        )}
      </Grid.Container>
    </>
  );
};

export default TabSponsorship;
