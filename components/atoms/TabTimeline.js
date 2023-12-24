// Components
import Timeline from "../atoms/Timeline";
// Styles
import { Text, Spacer } from "@geist-ui/react";

const TabTimeline = () => {
  return (
    <>
      <Text p>
        So you clicked on ‘More about me’, bit of a stalker there? Well, if you
        are here already and interested in my fascinating life story, just
        scroll along the timeline to get to know me intimately and understand
        the inner workings of a mastermind.
      </Text>
      <Spacer h={2} />
      <Text h3>Highlights ⭐</Text>
      <Timeline />
    </>
  );
};

export default TabTimeline;
