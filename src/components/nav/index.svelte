<style lang="scss">
@import "nav.scss";
</style>

<script>
	export let segment;
</script>

<nav class="nav">
  <a href="." class="nav__logo">KeVD_</a>
  <ul class="nav__menu">
    <li><a rel=prefetch class:active="{segment === 'writing'}" class="link-writing" href="/writing">Writing</a></li>
    <li><a rel=prefetch class:active="{segment === 'coding'}" class="link-coding" href="/coding">Coding</a></li>
    <li><a rel=prefetch class:active="{segment === 'designing'}" class="link-designing" href="/designing">Designing</a></li>
    <li><a rel=prefetch class:active="{segment === 'gaming'}" class="link-gaming" href="/gaming">Gaming</a></li>
  </ul>
  <ul class="nav__socials">
    <li><a href="https://twitter.com/Elsolo244" target="_blank">Twitter</a></li>
  </ul>
</nav>
