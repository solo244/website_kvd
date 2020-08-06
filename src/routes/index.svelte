<style lang="scss">
@import "../styles/pages";
</style>

<script>
	import { onMount } from "svelte";
	import writing from "../constants/writing.js";
	import Header from "../components/header/index.svelte";
	import Button from "../components/button/index.svelte";

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
				{#each writing as project, i}
					{#if project.status && i < 3}
						<li>
							<a href={project.link} class="grid__item__link writing">
								<span>{project.type}</span>
								<div class={`grid__item__category ${project.category}`}>{project.category}</div>
								<h3>{project.title}</h3>
								<div class="grid__item__date">{project.date}</div>
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
