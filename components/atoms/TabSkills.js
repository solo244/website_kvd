// Config/state
import skills from "../../constants/skills";
// Components
import Skill from "./Skill";
// Styles
import { Text, Spacer, Grid } from "@geist-ui/react";

const TabSkills = () => {
  return (
    <>
      <Text p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Spacer y={2} />
      <Text h3>Todo 🧠</Text>
      <Grid.Container gap={2}>
        {skills.map(
          skill =>
            skill.progress !== 100 && (
              <Skill
                title={skill.title}
                progress={skill.progress}
                link={skill.link}
              />
            )
        )}
      </Grid.Container>
      <Spacer y={2} />
      <Text h3>Done 💪</Text>
      <Grid.Container gap={2}>
        {skills.map(
          skill =>
            skill.progress === 100 && (
              <Skill
                title={skill.title}
                progress={skill.progress}
                link={skill.link}
              />
            )
        )}
      </Grid.Container>
    </>
  );
};

export default TabSkills;
