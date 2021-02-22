<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`writing.json`)
      .then(r => r.json())
      .then(writings => {
        return { writings };
      });
  }
</script>

<script>
  import Header from "../../components/header/index.svelte";
  import Filter from "../../components/filter/index.svelte";

  export let writings = null;
  let filter = { show: "", view: "", filtered: "" };

  function setFilter(event) {
    const { show, view, filtered } = event.detail;
    filter = { show: show, view: view, filtered: filtered };
  }
</script>

<svelte:head>
  <title>Writing | Ken Van Damme</title>
</svelte:head>

<Header
  title="Writing"
  content="We can't help everyone, but everyone can help someone."
  background="writing" />

<Filter filters={filter} on:filter={e => setFilter(e)} />

<section className="container grid--overview">
  <section className="grid__row">
    {#each writings as writing}
      {#if filter.show === '' || filter.show === writing.category}
        {#if filter.filtered === '' || filter.filtered.includes(writing.filters)}
          <article
            className={`grid__item ${filter.view === 'List' ? 'grid__item--list' : ''}`}>
            <a
              rel="prefetch"
              href="./writing/{writing.slug}"
              className="grid__item__link writing">
              <span>{writing.category}: {writing.collection}</span>
              <div
                className={`postfilter grid__item__category ${writing.filters}`}>
                {writing.filters}
              </div>
              <h3>{writing.title}</h3>
              <div className="grid__item__date">{writing.date}</div>
            </a>
          </article>
        {/if}
      {/if}
    {/each}
  </section>
</section>
