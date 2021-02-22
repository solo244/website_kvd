// Dependencies
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
// Components
import Blog from "../../components/atoms/Blog";
// Styles
import { Text, Image, Code, Display } from "@geist-ui/react";

const ASimpleWebsite = () => {
  return (
    <Blog
      title="Is building a website actually that difficult?"
      content={content}
      type="Tutorials"
    />
  );
};

export default ASimpleWebsite;

const codeString = `import React from "react";

const App = () => {
  return (
    <>HELLO</>
  )
}

export default App;`;

const content = (
  <>
    <Text p>
      So making a website shouldn't be too difficult ? That's what I hear, like{" "}
      <strong>A LOT</strong>. I don't understand why. With the constant
      evolution of the web and its technologies, it's impossible to keep up.
      (Well, with everything anyways.) That's why there are so many jobs in the{" "}
      <strong>Information Technology</strong>. There are{" "}
      <code>web designers</code>, <code>developers</code>,{" "}
      <code>app builders</code>, <code>network-people</code>,
      <code>communication and marketing</code>, <code>graphic designers</code>,{" "}
      <code>animators</code>... You get the point. Just because you're in IT,
      doesn't mean you can build a website. It might, but it's not a guarantee.
      Why not ? <strong>Because it is difficult</strong>. You need a lot of
      information to even start. What program do I use, what do I buy, where do
      I find the good information (not the crummy bad one). Even with a good
      idea of what you're doing, you still need experience to make it all work,
      in all <code>browsers</code>, on all systems, on <code>mobile</code> and{" "}
      <code>desktop</code>. The list is long and the road is paved with mostly
      good intentions, but you need a starting point. You need some technical
      background information and you need a lot of enthusiasm. You will get
      stuck and you will come across problems, all of us have, that's how we've
      learned to avoid them. By sitting there in front of the screen, sadly
      sighing at the code we have written that doesn't work for a very specific
      scenario for no apparent reason. Then we ask.{" "}
      <strong>Ourselves or Google</strong>.
    </Text>
    <Display
      shadow
      caption={
        <p>
          Set the <Code>height</Code> to reduces the possibility of page
          rerender.
        </p>
      }
    >
      <Image
        width={540}
        height={246}
        src="https://d33wubrfki0l68.cloudfront.net/b4f65dc3953fe897e942d209752134fedf726742/4b2cb/images/tutorials/simple/random_minion_1.png"
      />
    </Display>
    <Text p>
      To Google that would be: "how do I <code>align</code> two elements" and to
      ourselves it would be: "this all sucks, should I quit ?". Well, don't
      quit. I can honestly tell you that even after many years I still have that
      feeling, but not nearly as often. Plus, now I know that I can find the
      answer somewhere. But at the beginning it was blood, sweat and tears. But
      everyone has to go through that, you just need to find the patience and
      passion to keep going and get good at it.{" "}
      <strong>Then it becomes fun, I guarantee it</strong>.
    </Text>
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
      {codeString}
    </SyntaxHighlighter>
    <Text h2>What to use?</Text>
    <Text p>
      The first thing I'll look at is a common question that I receive. What
      should I use to make websites ? What program or piece of software should I
      buy ? Well, all personal tastes aside, you should try to find something
      that's free. Thats your main goal. The reason a lot of people pay money
      for good software is because they think they need it. I want to make
      websites, I'll just buy this, click a few buttons and I'll have a website.
      Although we're trying to make this happen, we're still not there yet. If
      that day ever comes, I'll jump on that like white on rice (don't think I'm
      using that right). Anyways, what I'm saying is, try to avoid the paying
      programs and do the work yourself. Download a free IDE (program to write
      code in or - more technically said: integrated development environment)
      and start. Start to look stuff up, read and fill your head with knowledge
      on making websites with code. It's often not the fastest way, but it's the
      best way. Full stop. No discussion. Relying on software to write code for
      you for the web is not a good choice. It's an easy choice when you're
      inexperienced but it's a bad one. Your website will be neither personal,
      nor will you have learnt anything but how to use this specific program. If
      you are interested in writing your own code and building your own personal
      website, continue reading.
    </Text>
    <Text h2>Code is your friend</Text>
    <Text p>
      Writing code might seem scary, but don't worry, we'll do it together in a
      way that'll be easy and readable. We'll be constantly checking our results
      in a visual way, so you won't be stuck behind a screen writing and reading
      code for hours, you'll be stuck behind a screen writing and reading code
      for hours whilst looking at the evolution of your oh-so-pretty design.
      Some of the IDEs are good, some are better. But when it comes down to it,
      it's a personal choice. Most of them have varying colour schemes and
      themes that you can choose. You can make them your own. And that's what
      you need, you're own workspace. You'll feel that need to personalise later
      on, when you'll be doing more of that sweet sweet programming. Let's take
      a quick look at our choices:{" "}
    </Text>
  </>
);