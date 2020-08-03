<style lang="scss" global>
@import "../styles/reset";
@import "../styles/normalise";
</style>

<script>
	import Nav from '../components/nav/index.svelte';
	import Footer from '../components/footer/index.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
	<Footer />
</main>

