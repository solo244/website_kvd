<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`gaming.json`).then(r => r.json()).then(gamings => {
			return { gamings };
		});
	}
</script>

<script>
	import Header from "../../components/header/index.svelte";
	import Filter from "../../components/filter/index.svelte";
	export let gamings = null
</script>

<svelte:head>
	<title>Gaming | Ken Van Damme</title>
</svelte:head>

<Header
	title="Gaming"
	content="There's a call to adventure. It's something in the inner psyche of humanity, particularly males."
	author="Gary Gygax"
	background="gaming"
/>

<section class="container grid--overview">
	<section class="grid__row">
		{#each gamings as coding}
			<article class="grid__item">
				<a href="{coding.link}" class="grid__item__link gaming" target="_blank">
					<span>{coding.description}</span>
          <div class={`postfilter grid__item__category ${coding.category}`}>{coding.category}</div>
					<h3>{coding.title}</h3>
				</a>
			</article>
		{/each}
	</section>
</section>
