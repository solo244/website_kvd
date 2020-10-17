<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`designing.json`).then(r => r.json()).then(designs => {
			return { designs };
		});
	}
</script>

<script>
	import Header from "../../components/header/index.svelte";
	import Filter from "../../components/filter/index.svelte";
	export let designs = null
</script>

<svelte:head>
	<title>Designing | Ken Van Damme</title>
</svelte:head>

<Header
	title="Designing"
	content="Whoever said money can't buy happiness simply didn't know where to go shopping."
	background="designing"
/>

<section class="container grid--overview">
	<section class="grid__row">
		{#each designs as design}
			<article class="grid__item">
				<a href="{design.link}" class="grid__item__link designing" target="_blank" style={`background-color: #${design.background}`}>
					<h3 style={`color: #${design.color}`}>{design.title}</h3>
					<div class="grid__item__date" style={`color: #${design.color}`}>{design.date}</div>
					<div class="grid__item__image" style={`background-image: url(/images/creative/${design.image})`}></div>
				</a>
			</article>
		{/each}
	</section>
</section>
