<style lang="scss">
@import "nav.scss";
</style>

<script>
  import {
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon
  } from "svelte-feather-icons";
	export let segment;
</script>

<nav class="nav">
  <a href="." class="nav__logo">KeVD_</a>
  <ul class="nav__menu">
    <li><a rel=prefetch class:active="{segment === "writing"}" class="link-writing" href="/writing">Writing</a></li>
    <li><a rel=prefetch class:active="{segment === "coding"}" class="link-coding" href="/coding">Coding</a></li>
    <li><a rel=prefetch class:active="{segment === "designing"}" class="link-designing" href="/designing">Designing</a></li>
    <li><a rel=prefetch class:active="{segment === "gaming"}" class="link-gaming" href="/gaming">Gaming</a></li>
  </ul>
  <ul class="nav__socials">
    <li>
      <a rel="me" href="https://twitter.com/Elsolo244" target="_blank">
        <TwitterIcon size="20" />
      </a>
    </li>
    <li>
      <a rel="me" href="https://github.com/solo244" target="_blank">
        <GithubIcon size="20" />
      </a>
    </li>
    <li>
      <a rel="me" href="https://www.linkedin.com/in/ken-van-damme" target="_blank">
        <LinkedinIcon size="20" />
      </a>
    </li>
    <li>
      <a href="mailto:info.kenvandamme.be" target="_blank">
        <MailIcon size="20" />
      </a>
    </li>
  </ul>
</nav>
