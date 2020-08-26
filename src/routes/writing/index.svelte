<style lang="scss" global>
@import "../styles/pages";
@import "../styles/filters";
</style>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`writing.json`).then(r => r.json()).then(writings => {
			return { writings };
		});
	}
</script>

<script>
	import Header from "../../components/header/index.svelte";
	import Filter from "../../components/filter/index.svelte";
	export let writings;
</script>

<svelte:head>
	<title>Writing | Ken Van Damme</title>
</svelte:head>

<Header
	title="Writing"
	content="We can't help everyone, but everyone can help someone."
	background="writing"
/>

<Filter />

<section class="container grid--overview">
	<section class="grid__row">
		{#each writings as writing}
			<article class="grid__item">
				<a rel="prefetch" href="writing/{writing.slug}" class="grid__item__link writing">
					<span>{writing.category}: {writing.collection}</span>
					<div class={`postfilter grid__item__category ${writing.filters}`}>{writing.filters}</div>
					<h3>{writing.title}</h3>
					<div class="grid__item__date">{writing.date}</div>
				</a>
			</article>
		{/each}
	</section>
</section>
