<script>
  import Icon from "./_icon.svelte";

  export let item = "";
  export let icon = "";
  export let position = "";
</script>

{#if icon !== ""}
  {#if position === "left" || position === ""}
    <Icon icon={icon} />
    {item}
  {:else if position="right"}
    {item}
    <Icon icon={icon} />
  {/if}
{:else}
  {item}
{/if}
