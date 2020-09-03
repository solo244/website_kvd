<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status} {error.message} | Ken Van Damme</title>
</svelte:head>

<div class="main__error">
	<span class="main__error__type">{status} {error.message}</span>
	<h1>What just happened?!</h1>
	<img src="/images/page-not-found.png" alt="Page not found" width="300">
	<h2>This page doesn't exist</h2>
	<p>Which is a seemingly absurd and contradictory statement when thinking of the fact that you are on this page now.. 😕</p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>

