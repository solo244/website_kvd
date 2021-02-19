// Components
import Timeline from "../atoms/Timeline";
// Styles
import { Text, Spacer } from "@geist-ui/react";

const TabTimeline = () => {
  return (
    <>
      <Text p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Spacer y={2} />
      <Text h3>Highlights ⭐</Text>
      <Timeline />
    </>
  );
};

export default TabTimeline;
