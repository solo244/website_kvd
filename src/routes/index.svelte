<style lang="scss" global>
@import "../styles/pages";
@import "../styles/filters";
</style>

<!-- <script context="module">
	export function preload({ params, query }) {
		const writings = this.fetch(`writing.json`).then(r => r.json()).then(writings => {
			return { writings };
		});
		const codings = this.fetch(`coding.json`).then(r => r.json()).then(codings => {
			return { codings };
		});

		return codings, writings;
	}
</script> -->

<script>
	import { onMount } from "svelte";
	import Header from "../components/header/index.svelte";
	import Button from "../components/button/index.svelte";

	export let writings;
	export let codings;

	let toggles = [""];

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

	function toggleMode(type) {
		if (toggles.includes(type)) {
			toggles = toggles.filter(toggle => toggle !== type);
		} else {
			let added = toggles;
			added.push(type);
			toggles = added;
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

<section class="container grid--stacked">
	<section class="grid__row">
		{#if writings !== undefined && writings !== null}
			{#each writings as writing, i}
				{writing.title}
			{/each}
		{/if}

		{#if codings !== undefined && codings !== null}
			{#each codings as coding, i}
				{coding.title}
			{/each}
		{/if}
		<!-- <article class="grid__item" class:active={toggles.includes("writing")}>
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
				<Button on:click={() => toggleMode("writing")} type="primary" label="Open" icon="plus" group />
				<Button href="/writing" label="All" icon="right" position="right" group />
			</div>
		</article> -->

		<!-- <article class="grid__item" class:active={toggles.includes("coding")}>
			<h2>Coding</h2>
			<ul>
				{#each codings as coding, i}
					{#if i < 3}
						<li>
							<a href="{coding.link}" class="grid__item__link coding">
								<span>{coding.description}</span>
								<div class={`postfilter grid__item__category ${coding.category}`}>{coding.category}</div>
								<h3>{coding.title}</h3>
							</a>
						</li>
					{/if}
				{:else}
					<li>No projects found</li>
				{/each}
			</ul>
			<div class="grid__buttons">
				<Button on:click={() => toggleMode("coding")} type="primary" label="Open" icon="plus" group />
				<Button href="/coding" label="All" icon="right" position="right" group />
			</div>
		</article> -->

		<article></article>
		<article></article>
	</section>
</section>
