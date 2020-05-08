<!-- Styles -->
<style lang="scss">
@import "header.scss";
</style>

<!-- Scripts -->
<script>
import Logo from '../../images/logo-42.svg';
const setActive = (e) => {
  console.log("Clicked", e);
}
</script>

<!-- HTML -->
<nav class="header">
  <div class="breadcrumbs">
    <a href="/" class="logo">
      {@html Logo}
    </a>
    <span>?</span>
  </div>
  <ul class="menu">
    <li><a href="/" on:click={(e) => setActive(e)}>Home</a></li>
    <li><a href="/code">Code</a></li>
    <li><a href="/tutorials">Tutorials</a></li>
    <li><a href="/creative">Creative</a></li>
    <li><a href="/dnd">D&D</a></li>
  </ul>
</nav>
