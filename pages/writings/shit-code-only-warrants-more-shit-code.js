// Components
import Blog from "../../components/atoms/Blog";
// Styles
import { Text, Note, Image, Code, Display } from "@geist-ui/react";

const shitcCodeOnlyWarrantsMoreShitCode = () => {
  return (
    <Blog
      title="Shit code only warrants more shit code"
      content={content}
      type="Brainfarts"
    />
  );
};

export default shitcCodeOnlyWarrantsMoreShitCode;

const content = (
  <>
    <Note label={false} filled>
      Disclaimer: this title is click bait. All words are my opinion and
      experience, apply mostly to the web development world and I’m located in
      Belgium. Your mileage may vary.
    </Note>
    <Text>
      <strong>
        Conclusion: bad code is only bad code if it hinders your user or
        programmers working on it in any way. But nothing is black and white.
        That hindrance is measured in degrees. Some degree is acceptable and
        expected.
      </strong>
    </Text>
    <Text h2>Where to start</Text>
    <Text>
      I love spaghetti. Both the food and the code. However, I don’t like it as
      a result or something you should aspire to have in finished projects but
      merely as a step. A necessary step that a lot of people write off as plain
      bad. I’d say that statement is as useless as claiming if you are drawing
      you can’t sketch something quickly, but rather you should draw your final
      result in one go.
    </Text>
    <Display
      shadow
      caption={
        <p>
          Spaghetti code is a pejorative piece of information technology jargon
          that is caused by factors like unclear project scope of work, lack of
          experience and planning and an inability to conform a project to
          programming style rules. -Wikipedia
        </p>
      }
    >
      <Image
        width={600}
        height={399}
        src="/images/blog/spaghtti-code-shit-code.jpg"
      />
    </Display>
    <Text h2>Planning is key</Text>
    <Text>
      Yes, you should plan. Setup, process and workflow. You can’t just dive
      into any project by just typing code now can you? Wait, why not? Because
      people told you so? Of course you can! But in most cases it’s not a good
      idea. Because you’ll write a lot of code that wasn’t foreseen for certain
      features. So you’ll have to refactor those code blocks. They might get
      messy and inconsistent. Having a plan will avoid those roadblocks and
      lower technical debt. But it won’t prevent or fix it. Planning your
      “general” goal by defining scope and technical specs will always help, but
      you’ll need to, at some point, rework some things. Without exception. You
      don’t want those things to be the majority but there is no avoiding it. So
      having experience in this field is important, otherwise you’ll loose to
      much time when it eventually happens.
    </Text>
    <Text h2>Duck tape personal projects</Text>
    <Text>
      Lets’ face it, we don’t always know what we’re doing. But that’s fine. In
      most cases, you learn and evolve and don’t make the same mistakes. In some
      cases, you do keep making the same mistake and learn how to assign it to a
      co-worker. There is always a solution. What we need is to train ourselves
      to find a solution. This is where personal projects can come in. I would
      argue you don’t need to work next to your main job on development, but I
      wouldn’t recommend it. Personal projects is where a lot of my creativity
      goes to die. I know that sounds bad, but it’s not. Because I learn stuff
      in the process. Even if it’s how not to do something. You can learn on the
      job, but the margins are slim and a deadline can creep up on you really
      fast. You don’t ascertain information well under stress. And in most
      cases, you store the wrong, “hacky” solutions.
    </Text>
    <Text h2>Bad code isn’t always bad</Text>
    <Text>
      Defining bad code is probable one of the most optioned things to read
      online. What actually makes code bad? Nothing. It’s a terrible adjective.
      It’s incorrect and subjective and code isn’t. Sure, you write your version
      of any language, but it’s filled with workflow and logic, not opinions.
      And using a certain way of working can have consequences. Those can have a
      direct effect on the outcome and can be classified as “bad”. If your
      triple for loop impacts performance, some might labels it as bad. If you
      use 16 nesting levels in your CSS selectors, that would not be smart. Then
      you could argue that that persons code needs to be addressed. Fixed. But
      that doesn’t not mean the person needs a sit-down or needs to be labeled
      as dumb. They need to understand why that code is “bad” and why it should
      be avoided.
    </Text>
    <Text h2> What is shit</Text>
    <Text>
      We’ve labeled our bad code. But what is shit code? Something else. It's
      that code written be the “smart” person in the office. Code only he or she
      can alter and nobody else. It’s code that doesn’t make sense because of
      naming conventions or writing things on one line because that’s cooler.
      Blocks of code that are repeated by copy/paste and every time slightly
      altered. Undocumented and/or uncommented code. Code where, when you get it
      assigned to you, you look it and go: “Shit”. I need to adjust one color
      and it’ll take me 30 minutes. This function is broken, so I’ll have to go
      and ask Josh, because he’s the only one in the company that knows how to
      fix it. Which he then does in 2 minutes, but he can’t explain the fix to
      you, because you wouldn’t get it.
    </Text>
    <Text h2>Shit consequences</Text>
    <Text>
      The results of having bad code in a company is simple. You might loose
      some time having to fix it. But if done correctly this is a self-fixing
      problem. Because if a developer gets explained why they should avoid
      something, they’ll do exactly that. And over time, the code only get’s
      better and better. They pass the message along and the general bar of
      quality of the project or company gets raised a bit. Shit code on the
      other hand does the opposite. It creates smaller groups of people with
      specific knowledge and an atmosphere where asking questions can be
      followed up by criticism. This behavior only leads to negative results
      that manifest in very different ways. They are never good for your people
      and thus also not for the company. Shit people, being smart or capable,
      write shit code and have a way of ruining the experience for others. We
      should allow bad code to experience lessons learned and avoid shit code
      wherever we can.
    </Text>
  </>
);
