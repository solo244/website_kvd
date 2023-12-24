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
        So now you know me intimately, have clearly clicked on several of my
        handy links and find me potentially interesting to follow, hire or
        support. Great! If you like my designs, you can buy them below and if
        you cannot handle mornings without your hot cup of java just like me,
        why don’t you show me that support by hitting the button below ? Much
        appreciated!
      </Text>
      <Spacer h={2} />
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
