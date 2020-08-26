<!-- Styles -->
<style lang="scss">
@import "./buttons.scss";
</style>

<!-- Scripts -->
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Content from "./_content.svelte";

  export let label = "";
  export let href = "";
  export let type = "";
  export let icon = "";
  export let position = "";
  export let group;

  function click() {
    dispatch("click");
  }
</script>

<!-- HTML -->
{#if label !== ""}
  {#if href !== ""}
    <a href={href} class={`button ${type}`} class:grouped={group}>
      <Content icon={icon} position={position} item={label} group={group} />
    </a>
  {:else}
    <button class={`button ${type}`} on:click={click} class:grouped={group}>
      <Content icon={icon} position={position} item={label} group={group} />
    </button>
  {/if}
{/if}
