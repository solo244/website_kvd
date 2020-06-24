<!-- Styles -->
<style lang="scss">
@import "./buttons.scss";
</style>

<!-- Scripts -->
<script>
export let label = "";
export let href = "";
</script>

<!-- HTML -->
{#if typeof label === "object"}
  <div class="button-group">
    {#each label as item, i}
      {#if typeof href === "object"}
        <a href="/" class="button">
          {item}
        </a>
      {:else}
        <button class="button">
          {item}
        </button>
      {/if}
    {/each}
  </div>
{:else}
  {#if href !== ""}
    <a href="/" class="button">
      {label}
    </a>
  {:else}
    <button class="button">
      {label}
    </button>
  {/if}
{/if}
