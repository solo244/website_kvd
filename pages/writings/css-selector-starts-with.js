// Dependencies
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
// Components
import Blog from "../../components/atoms/Blog";
// Styles
import { Text, Note, Spacer, Code } from "@geist-ui/react";

const cssSelectorStartsWith = () => {
  return (
    <Blog
      title="CSS selector starts with"
      content={content}
      type="What Did I Google Today"
    />
  );
};

export default cssSelectorStartsWith;

const codeSelector1 = `div[width] {
  background-color: yellow;
}`;
const codeSelector2 = `a[href="https://kenvandamme.be"] {
  color: orange;
}`;
const codeSelector3 = `a[href^=http] {
  color: green;
}`;
const codeSelector4 = `img[src$=.jpg] {
  border: 1px solid red;
}`;
const codeSelector5 = `a[href*=mail][href*=tel] {
  color: red;
}`;

const content = (
  <>
    <Note label="Disclaimer" type="secondary">
      these posts are things I tend to Google more than once. Instead of testing
      my luck every time, I'm going to collect them here, for later.
    </Note>
    <Spacer y={1} />
    <Text h2>Problem</Text>
    <Text>
      I keep having to select similar elements on a page that have no unique
      Class (seriously, put some clothes on Meredith!) or ID. A generic{" "}
      <Code>input</Code> or <Code>p</Code> tag selector is too general. CMS’s or
      not being in control of the backend make it impossible for me to add
      something into the HTML.So my solution is to create CSS selectors that are
      more specific.
    </Text>
    <Text h2>Solution</Text>
    <Text>
      CSS has the option to select HTML elements via attributes. Which is
      amazing. A couple of examples.
    </Text>
    <Text h4>HTML element has attribute</Text>
    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>
      {codeSelector1}
    </SyntaxHighlighter>
    <Spacer y={1} />
    <Text h4>
      HTML element with an attribute with that exact value, like "select all
      links that go to my own website"
    </Text>
    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>
      {codeSelector2}
    </SyntaxHighlighter>
    <Spacer y={1} />
    <Text h4>
      HTML element with an attribute that start with a value, like "select all
      links that are external"
    </Text>
    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>
      {codeSelector3}
    </SyntaxHighlighter>
    <Spacer y={1} />
    <Text h4>
      HTML element with an attribute that ends in a value, like "select all
      images that have the jpg extension"
    </Text>
    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>
      {codeSelector4}
    </SyntaxHighlighter>
    <Spacer y={1} />
    <Text h4>
      HTML element with an attribute that contains a certain value, like "select
      all links that are either a phone or email link"
    </Text>
    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>
      {codeSelector5}
    </SyntaxHighlighter>
  </>
);
