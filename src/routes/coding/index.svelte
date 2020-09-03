<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`coding.json`).then(r => r.json()).then(codings => {
			return { codings };
		});
	}
</script>

<script>
	import Header from "../../components/header/index.svelte";
	import Filter from "../../components/filter/index.svelte";
	export let codings = null
</script>

<svelte:head>
	<title>Coding | Ken Van Damme</title>
</svelte:head>

<Header
	title="Coding"
	content="Comic Sans is never an acceptable font. Unless you are an 8 year old girl writing a poem about unicorns."
	background="coding"
/>

<section class="container grid--overview">
	<section class="grid__row">
		{#each codings as coding}
			{#if coding.online}
				<article class="grid__item">
					<a href="{coding.link}" class="grid__item__link coding" style={`background-image: url(/images/projects/${coding.image})`} target="_blank">
						<span>{coding.description}</span>
						<div class={`postfilter grid__item__category ${coding.category}`}>{coding.category}</div>
						<h3>{coding.title}</h3>
					</a>
				</article>
			{/if}
		{/each}
	</section>
</section>
