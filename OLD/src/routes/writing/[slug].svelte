<script context="module">
  export async function preload({ params, query }) {
    console.log(`writing/${params.slug}.md`);
    const res = await this.fetch(`writing/${params.slug}.md`);
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

  import {
    CalendarIcon,
  } from "svelte-feather-icons";

  import Header from "../../components/header/index.svelte";
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<section class="main__header">
  <div class="main__header__sub">{post.title}</div>
  <span class={`main__header__filter ${post.filters}`}>{post.filters}</span>
  <h1>{post.header}</h1>
  <span class="main__header__icon">
    <CalendarIcon size="20" />
    <span>{post.date}</span>
  </span>
</section>

<div class="main__content">
	{@html post.html}
</div>
