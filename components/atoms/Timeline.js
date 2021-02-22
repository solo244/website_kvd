// Config/state
import timeline from "../../constants/timeline";
// Styles
import { Text, Spacer, Card } from "@geist-ui/react";

const Timeline = () => {
  return timeline.map(time => (
    <React.Fragment key={time.year}>
      <Card>
        <Text b>{time.year}: </Text>
        {time.description}
      </Card>
      <Spacer y={0.5} />
    </React.Fragment>
  ));
};

export default Timeline;
