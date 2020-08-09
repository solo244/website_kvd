<style lang="scss">
@import "../styles/pages";
@import "../styles/filters";
</style>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`writing.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Header from "../../components/header/index.svelte";
	export let posts;
</script>

<svelte:head>
	<title>Writing | Ken Van Damme</title>
</svelte:head>

<Header
	title="Writing"
	content="We can't help everyone, but everyone can help someone."
	background="writing"
/>

<section class="container grid">
	<section class="grid__row">
		{#each posts as post}
			<article class="grid__item">
				<a rel="prefetch" href="writing/{post.slug}" class="grid__item__link writing">
					<span>{post.category}: {post.collection}</span>
					<div class={`postfilter grid__item__category ${post.filters}`}>{post.filters}</div>
					<h3>{post.title}</h3>
					<div class="grid__item__date">{post.date}</div>
				</a>
			</article>
		{/each}
	</section>
</section>
