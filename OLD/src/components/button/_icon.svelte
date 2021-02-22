<script>
  import {
    PlusIcon,
    ArrowRightIcon
  } from "svelte-feather-icons";

  export let icon = "";
</script>

{#if icon === "plus"}
  <PlusIcon size="20" />
{/if}
{#if icon === "right"}
  <ArrowRightIcon size="20" />
{/if}
