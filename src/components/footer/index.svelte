<style lang="scss">
@import "footer.scss";
</style>

<script>
  import {
    ArrowUpIcon
  } from "svelte-feather-icons";

  let year = new Date().getFullYear();

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
    <div class="to-top" on:click={() => toTop()}>
      <ArrowUpIcon size="20" />
    </div>
    <aside>
      <span>© {year}</span> Ken Van Damme
    </aside>
  </section>
  <section class="disclaimer">
    No <span>🍪 cookies, 👣 tracking, 💰 ads or ❗pop-ups.</span>
  </section>
</nav>
