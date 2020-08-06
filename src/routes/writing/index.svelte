<style>
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

{#each posts as post}
	<a rel="prefetch" href="writing/{post.slug}">{post.title}</a>
{/each}
