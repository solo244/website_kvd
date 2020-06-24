<!-- Styles -->
<style lang="scss">
@import "../../styles/layout";
@import "./pages.scss";
</style>

<!-- Scripts -->
<script>
import Button from "../components/button/index.svelte";
import writing from "../constants/writing.js";
</script>

<!-- HTML -->
<section>
	<h1>We can't help everyone, but everyone can help someone.</h1>
</section>

<section class="container--3">
  <article href="/" class="">
    <Button label="View all"/>
    <h2>WDIGT*</h2>
    <ul>
      <li>
        <a href="/">
          <span>CSS selector starts with</span>
        </a>
      </li>
    </ul>
  </article>
	<article href="/" class="">
    <Button label="View all"/>
    <h2>Blog posts</h2>
    <ul>
      <li>
        <a href="/">
        </a>
      </li>
    </ul>
  </article>
	<article href="/" class="">
    <Button label="View all"/>
    <h2>Tutorials</h2>
    <ul class="list-view">
      {#each writing.tutorials as tutorial}
        <li>
          <a href={"/css" + tutorial.link}>
            {tutorial.title}
          </a>
        </li>
      {/each}
    </ul>
  </article>
</section>
