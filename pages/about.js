// Components
import TabSkills from "../components/atoms/TabSkills";
import TabTimeline from "../components/atoms/TabTimeline";
import TabLinks from "../components/atoms/TabLinks";
import TabSponsorship from "../components/atoms/TabSponsorship";
import Layout from "../components/molecules/Layout";
// Styles
import { Text, Spacer, Tabs } from "@geist-ui/react";
import Activity from "@geist-ui/react-icons/activity";
import BookOpen from "@geist-ui/react-icons/bookOpen";
import LinkIcon from "@geist-ui/react-icons/link";
import DollarSign from "@geist-ui/react-icons/dollarSign";

const About = () => {
  return (
    <Layout title="About | Ken Van Damme">
      <Text style={{ textAlign: "center", lineHeight: "1" }} h1>
        I am by far the most me I've ever known
      </Text>
      <Spacer y={2} />
      <Tabs initialValue="1">
        <Tabs.Item
          label={
            <>
              <Activity /> My timeline
            </>
          }
          value="1"
        >
          <TabTimeline />
        </Tabs.Item>
        <Tabs.Item
          label={
            <>
              <BookOpen /> Learning in public
            </>
          }
          value="2"
        >
          <TabSkills />
        </Tabs.Item>
        <Tabs.Item
          label={
            <>
              <LinkIcon /> Handy links
            </>
          }
          value="3"
        >
          <TabLinks />
        </Tabs.Item>
        <Tabs.Item
          label={
            <>
              <DollarSign /> Supporting me
            </>
          }
          value="4"
        >
          <TabSponsorship />
        </Tabs.Item>
      </Tabs>
    </Layout>
  );
};

export default About;
