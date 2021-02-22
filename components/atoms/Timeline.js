// Config/state
import timeline from "../../constants/timeline";
// Styles
import { Text, Spacer, Card } from "@geist-ui/react";

const Timeline = () => {
  return timeline.map(time => (
    <div key={time.year}>
      <Card>
        <Text b>{time.year}: </Text>
        {time.description}
      </Card>
      <Spacer y={0.5} />
    </div>
  ));
};

export default Timeline;
