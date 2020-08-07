<style lang="scss">
@import "footer.scss";
</style>

<script>
  import {
    ArrowUpIcon
  } from "svelte-feather-icons";

  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
</script>

<nav class="footer">
  <section class="container">
    <article>
      Icons from <a href="https://icons8.com/" target="_blank">Icon8</a>
    </article>
    <!-- Back to top -->
    <div class="to-top" on:click={() => toTop()}>
      <ArrowUpIcon size="20" />
    </div>
    <aside>
      <span>© 2020</span> Ken Van Damme
    </aside>
  </section>
</nav>
