<!-- Styles -->
<style lang="scss">
@import "./pages.scss";
@import "../../styles/utility";
</style>

<!-- Scripts -->
<script>
import designs from "../constants/designs.js";
import redbubble from "../images/redbubble.svg";
</script>

<!-- HTML -->
<section class="center">
	<h1>Whoever said money can't buy happiness simply didn't know where to go shopping.</h1>
	<!-- <h3>I've had some ideas over the years that I've always put on my own T-shirts. I figured now that I might just as well share these with you guys. I'll show them below and you can buy them from the link provided. Or you could always recommend them to a friend.</h3>-->
	<a href="https://www.redbubble.com/people/solo244/shop" target="_blank" class="redbubble">
		{@html redbubble}
	</a>
</section>

<section class="creative-projects">
	{#each designs as design}
		<a href={design.link} target="_blank" class={"creative-" + design.id}>
			<div class="design-bc"></div>
			<h2>{design.title}</h2>
			<img src={"/images/creative/" + design.id + ".jpg"} alt={design.title}>
			<div class="button">Buy</div>
		</a>
	{/each}
</section>
