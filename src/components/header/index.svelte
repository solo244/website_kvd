<style lang="scss">
@import "./header.scss";
</style>

<script>
  import Button from "../button/index.svelte";

  export let title;
  export let content;
  export let button;
  export let link;
  export let background;
</script>

<header class={`header ${background !== undefined ? background : ''}`}>
  <section class="container">
    <h1>{title}</h1>
    <p>{content}</p>
    <Button label={button} href={link} type={"primary"} />
  </section>
</header>
