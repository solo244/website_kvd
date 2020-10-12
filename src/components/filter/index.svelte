<style lang="scss">
@import "./filter.scss";
</style>

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import {
    XIcon,
  } from "svelte-feather-icons";

  export let filters;
  let show = filters.show;
  let view = filters.view;
  let filtered = filters.filtered;

  function reset() {
    show = "";
    view = "";
    filtered = "";

    dispatch("filter", { show, view, filtered });
  }

  function setFilter(type, updated) {
    if (type === "show") {
      show = updated;
    } else if (type === "view") {
      view = updated;
    } else if (type === "filtered") {
      filtered = updated;
    }

    dispatch("filter", { show, view, filtered });
  }
</script>

<div class="container">
  <aside class="filter">
    <section class="filter__block">
      <ul class="filter__main">
        <li>SHOW</li>
        <li class:active={show === ""} on:click={() => setFilter("show", "")}>All</li>
        <li class:active={show === "WDIGT"} on:click={() => setFilter("show", "WDIGT")}>What Did I Google Today</li>
        <li class:active={show === "Brainfart"} on:click={() => setFilter("show", "Brainfart")}>Brainfarts</li>
        <li class:active={show === "Tutorial"} on:click={() => setFilter("show", "Tutorial")}>Tutorials</li>
      </ul>
      <ul class="filter__main">
        <li>AS</li>
        <li class:active={view === ""} on:click={() => setFilter("view", "")}>Grid</li>
        <li class:active={view === "List"} on:click={() => setFilter("view", "List")}>List</li>
      </ul>
    </section>
    <section class="filter__block">
      <ul class="filter__sub">
        <li>FILTERS</li>
        <li class="all" class:active={filtered === ""} on:click={() => setFilter("filtered", "")}>ALL</li>
        <li class="css" class:active={filtered === "CSS"} on:click={() => setFilter("filtered", "CSS")}>CSS</li>
        <li class="js" class:active={filtered === "JS"} on:click={() => setFilter("filtered", "JS")}>JS</li>
        <li class="ps" class:active={filtered === "PS"} on:click={() => setFilter("filtered", "PS")}>PS</li>
        <li class="seo" class:active={filtered === "SEO"} on:click={() => setFilter("filtered", "SEO")}>SEO</li>
        <li class="general" class:active={filtered === "GENERAL"} on:click={() => setFilter("filtered", "GENERAL")}>GENERAL</li>
      </ul>
      {#if show !== "" || view !== "" || filtered !== ""}
        <aside class="filter__sub filter__sub--aside" on:click={() => reset()}>
          RESET FILTERS
          <XIcon size="16" />
        </aside>
      {/if}
    </section>
  </aside>
</div>
