// Config/state
import timeline from "../../constants/timeline";
// Styles
import { Text, Spacer, Card } from "@geist-ui/react";

const Timeline = () => {
  return timeline.map(time => (
    <>
      <Card>
        <Text b>{time.year}: </Text>
        {time.description}
      </Card>
      <Spacer y={0.5} />
    </>
  ));
};

export default Timeline;
