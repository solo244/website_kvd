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
        Yup, I jumped on this trend too. I think it’s a great push both for
        myself - constantly striving for more & being able to show off what I
        can do - and potentially for you, if you’re looking for new tools,
        techniques etc.
      </Text>
      <Spacer h={2} />
      <Text h3>Busy with 🧠</Text>
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
      <Spacer h={2} />
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
