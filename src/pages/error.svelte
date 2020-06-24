<!-- Styles -->
<style lang="scss">
@import "../../styles/utility";
</style>

<!-- Scripts -->
<script>
import Button from "../components/button/index.svelte";
</script>

<!-- HTML -->
<section class="center">
	<h1>What just happened?!</h1>
	<img src="/images/page-not-found.png" alt="Page not found" width="300">
	<h4>This page doesn't exist</h4>
	<p>Which is a seemingly absurd and contradictory statement when thinking of the fact that you are on this page now..</p>
	<Button label={["Go back home", "Down the rabbit hole"]} href={["/", "/"]} />
</section>
