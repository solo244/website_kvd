<style lang="scss" global>
@import "../styles/pages";
</style>

<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`coding/${params.slug}.md`);
    if (res.status === 200) {
      return { postMd: await res.text() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import fm from "front-matter";
  import MarkdownIt from "markdown-it";
  export let postMd;
  const md = new MarkdownIt();
  $: frontMatter = fm(postMd);
  $: post = {
    ...frontMatter.attributes,
    html: md.render(frontMatter.body)
  };

  import Header from "../../components/header/index.svelte";
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Header
	title={post.title}
	background="primary"
	button="More about me"
	link="/about"
/>

{post.date}
{post.category}
{post.collection}

<div class="content">
	{@html post.html}
</div>
