<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import { onMount } from "svelte";
	import Header from "../components/header/index.svelte";
	import Button from "../components/button/index.svelte";

	export let posts;
	let toggle = "";

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

	function setToggle(type) {
		if (toggle === type) {
			toggle = "";
		} else {
			toggle = type;
		}
	}
</script>

<svelte:head>
	<title>Ken Van Damme</title>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<Header
	title="Lorem all the ipsums"
	content="Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. As a profession, I make web-stuff at Mediasoft and Weebit."
	background="primary"
	button="More about me 😴"
	link="/about"
/>

<section class="container grid--stacked">
	{#if posts !== undefined && posts !== null}
		<section class="grid__row">
			<article class="grid__item" class:active={toggle === "writing"}>
				<h2>Writing</h2>
				<ul>
					{#each posts as post}
						{#if post.folder === 'writing'}
							<li>
								<a rel="prefetch" href="writing/{post.slug}" class={`grid__item__link writing ${post.folder}`}>
									<span>{post.category}: {post.collection}</span>
									<div class={`postfilter grid__item__category ${post.filters}`}>{post.filters}</div>
									<h3>{post.title}</h3>
									<div class="grid__item__date">{post.date}</div>
								</a>
							</li>
						{/if}
					{:else}
						<li>No projects found</li>
					{/each}
				</ul>
				<div class="grid__buttons">
					<Button on:click={() => setToggle("writing")} type="primary" label="Open" icon="plus" group />
					<Button href="/writing" label="All" icon="right" position="right" group />
				</div>
			</article>

			<article class="grid__item" class:active={toggle === "coding"}>
				<h2>Coding</h2>
				<ul>
					{#each posts as post}
						{#if post.folder === 'coding' && post.online}
							<li>
								<a href="{post.link}" class={`grid__item__link ${post.folder}`} style={`background-image: url(/images/projects/${post.image})`} target="_blank">
									<span>{post.description}</span>
									<div class={`postfilter grid__item__category ${post.category}`}>{post.category}</div>
									<h3>{post.title}</h3>
								</a>
							</li>
						{/if}
					{:else}
						<li>No projects found</li>
					{/each}
				</ul>
				<div class="grid__buttons">
					<Button on:click={() => setToggle("coding")} type="primary" label="Open" icon="plus" group />
					<Button href="/coding" label="All" icon="right" position="right" group />
				</div>
			</article>
		</section>
		<section class="grid__row">
			<article class="grid__item" class:active={toggle === "designing"}>
				<h2>Designing</h2>
				<ul>
					{#each posts as post}
						{#if post.folder === 'designing'}
							<li>
								<a href="{post.link}" target="_blank" class={`grid__item__link ${post.folder}`} style={`background-color: #${post.background}`}>
									<h3 style={`color: #${post.color}`}>{post.title}</h3>
									<div class="grid__item__date" style={`color: #${post.color}`}>{post.date}</div>
									<div class="grid__item__image" style={`background-image: url(/images/creative/${post.image})`}></div>
								</a>
							</li>
						{/if}
					{:else}
						<li>No projects found</li>
					{/each}
				</ul>
				<div class="grid__buttons">
					<Button on:click={() => setToggle("designing")} type="primary" label="Open" icon="plus" group />
					<Button href="/designing" label="All" icon="right" position="right" group />
				</div>
			</article>
			<article class="grid__item" class:active={toggle === "gaming"}>
				<h2>Gaming</h2>
				<ul>
					{#each posts as post}
						{#if post.folder === 'gaming'}
							<li>
								<a href="{post.link}" target="_blank" class={`grid__item__link ${post.folder}`} style={`background-color: #${post.background}`}>
									<h3 style={`color: #${post.color}`}>{post.title}</h3>
									<div class="grid__item__date" style={`color: #${post.color}`}>{post.date}</div>
									<div class="grid__item__image" style={`background-image: url(/images/creative/${post.image})`}></div>
								</a>
							</li>
						{/if}
					{:else}
						<li>No projects found</li>
					{/each}
				</ul>
				<div class="grid__buttons">
					<Button on:click={() => setToggle("gaming")} type="primary" label="Open" icon="plus" group />
					<Button href="/gaming" label="All" icon="right" position="right" group />
				</div>
			</article>
		</section>
	{/if}
</section>
