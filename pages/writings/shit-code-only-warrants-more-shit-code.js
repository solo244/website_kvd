// Components
import Blog from "../../components/atoms/Blog";
// Styles
import { Text, Note, Image, Code, Display } from "@geist-ui/react";

const shitCodeOnlyWarrantsMoreShitCode = () => {
  return (
    <Blog
      title="Shit code only warrants more shit code"
      content={content}
      type="Brainfarts"
    />
  );
};

export default shitCodeOnlyWarrantsMoreShitCode;

const content = (
  <>
    <Note label="Disclaimer" type="secondary">
      Disclaimer: this title is click bait. All words are my opinion and
      experience, apply mostly to the web development world and I’m located in
      Belgium. Your mileage may vary.
    </Note>
    <Text>
      <strong>
        TL;DR: bad code is only bad code if it hinders your user or programmers
        working on it in any way. But nothing is black and white. That hindrance
        is measured in degrees. Some degree is acceptable and expected.
      </strong>
    </Text>
    <Text h2>Where to start</Text>
    <Text>
      I love spaghetti. Both the food and the code. However, I don’t like it as
      a <em>result</em> or something you should plan to have in{" "}
      <em>finished</em>
      projects, but merely as a necessary step. A step that a lot of people
      write off as plain bad. I’d say that statement is as useless as claiming
      that if you are drawing you can’t sketch something quickly, but rather you
      should draw your final result in one go.
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
      You can’t just dive into any project by just typing code now, can you?
      Wait, why not? Because people told you so? Of course you can! But in most
      cases it’s not a good idea. Because you’ll write a lot of code that wasn’t
      foreseen for certain features. So you’ll have to refactor those code
      blocks. They might get messy and inconsistent. Having a plan will avoid
      those roadblocks and lower technical debt. But it won’t prevent or fix it.
      Planning your “general” goal by defining scope and technical specs will
      always help, but you’ll need to, at some point, rework some things.
      Without exception. You don’t want those things to be the majority but
      there is no avoiding it. So having experience in this field is important,
      otherwise you’ll loose to much time when it eventually happens.
    </Text>
    <Text h2>Duck tape personal projects</Text>
    <Text>
      We don't always know what we're doing. Surprising, I know. In most cases
      we learn and evolve and don't make the same mistakes over and over. In
      some cases, however, we do keep making the same mistakes and just get
      smarter about it: we assign it to a co-worker. There is always a solution.
      What we need to do is train ourselves to find a solution. This is where
      personal projects are a good option. I am not going to tell you that you
      absolutely need to do dev projects next to your main job, but I strongly
      recommend it. Personal projects are where a lot of my creativity goes to
      die. I know that sounds grim, but it is not. It's essential for me because
      I learn so much in the process. Sometimes it's just about how not to do
      something. You can choose to learn on the job, but the margins are slim
      and deadlines tend to creep on you really fast. You really seldomly have
      time during your day-to-day to improve yourself and look back over code to
      see what went wrong or what could be better. Additionally, you don't
      ascertain information as well under stress. This often results in you
      learning the wrong, "hacky" solutions.
    </Text>
    <Text h2>Bad code isn’t always bad</Text>
    <Text>
      Defining bad code is probably one of the most opinioned things to read
      online. What actually makes code "bad"? Nothing. It’s a terrible
      adjective. It’s incorrect and subjective and code isn’t. What is most
      important is that bad code != bad coder. An experienced developer with a
      highly paid job and freelance projects by the side could write non-optimal
      code. Their code could be more performant, readable, reusable. Sometimes
      we all take shortcuts, based on our situation. I think it's important not
      to get deflated by this. Write bad code, be upset that you don't get given
      the time to improve it and then learn from it. Your unperformant code
      could be perfectly readable. Optimally you combine this with our previous
      step and learn from this "bad" code and improve it in your own projects.
    </Text>
    <Text h2>What is shit</Text>
    <Text>
      I thought "bad" was a terrible adjective, why are we now calling code
      "shit"?! Well. Shit code is something else. It's that code written by the
      "smart" person in the office. Code only they can alter and nobody else.
      It's code that doesn't make sense because of naming conventions or line
      breaking choices because they are "cooler". Blocks of code that are
      repeated by copy/paste and every time slightly altered. Undocumented
      and/or uncommented code. Code which, when you get it assigned to you, you
      look at and go: "Shit". I need to adjust one colour and it'll take me 30
      minutes to sift through and figure this out. This function is broken, so
      I'll have to go and ask Josh because he's the only one in the company who
      knows how to fix it. Which he then does in 2 minutes, but he can't explain
      the fix to you, because you wouldn't get it. Don't be a Josh. Consider
      that people will have to pick up your slack when you're out or busy or
      leave the company. Be a teamplayer instead.
    </Text>
    <Text h2>Shit consequences</Text>
    <Text>
      Having "bad" code in a company is simple. You might lose some time having
      to fix it. Often it is a self-fixing problem, however. If the developer
      gains understanding as to why they should be avoiding this triple "for"
      loop or seemingly infinite nesting of your CSS selectors, they often will
      do exactly that. Over time, the code only gets better and better. They
      pass the message along and the general bar of quality of the
      project/company gets raised a bit. "Shit" code on the other hand does the
      opposite. It creates smaller groups of people with specific knowledge and
      an atmosphere where asking questions can be followed up by criticism. This
      behaviour only leads to negative results that manifset in very different
      ways. "Shit" people, smart or capable as they are, write shit code and
      have a way of ruining the experience for others. We should allow bad code
      to experience lessons learned and avoid shit code wherever we can.
    </Text>
  </>
);
