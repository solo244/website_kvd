<style lang="scss">
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
	import { onMount } from "svelte";
	import writing from "../constants/writing.js";
	import Header from "../components/header/index.svelte";
	import Button from "../components/button/index.svelte";

	export let writings;

	let writingMode = false;

	onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });

	function toggleMode(type, mode) {
		if (type === "writing") {
			writingMode = !mode;
		}
	}
</script>

<svelte:head>
	<title>Ken Van Damme</title>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<Header
	title="Lorem all the ipsums"
	content="Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. I think thats by far the best description I can give you."
	background="primary"
	button="More about me"
	link="/about"
/>

<section class="container grid">
	<section class="grid__row">
		<article class="grid__item" class:active={writingMode}>
			<h2>Writing</h2>
			<ul>
				{#each writings as writing, i}
					{#if i < 3}
						<li>
							<a rel="prefetch" href="writing/{writing.slug}" class="grid__item__link writing">
								<span>{writing.category}: {writing.collection}</span>
								<div class={`postfilter grid__item__category ${writing.filters}`}>{writing.filters}</div>
								<h3>{writing.title}</h3>
								<div class="grid__item__date">{writing.date}</div>
							</a>
						</li>
					{/if}
				{:else}
					<li>No projects found</li>
				{/each}
			</ul>
			<div class="grid__buttons">
				<button on:click={() => toggleMode("writing", writingMode)} type="primary">Open</button>
				<a href="/writing" class="button primary">All</a>
			</div>
		</article>

		<article></article>
		<article></article>
		<article></article>
	</section>
</section>
