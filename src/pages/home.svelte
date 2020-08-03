<!-- Styles -->
<style lang="scss">
// @import "../../styles/layout";
</style>

<!-- Scripts -->
<script>
import code from "../constants/code.js";
import designs from "../constants/designs.js";
import dnd from "../constants/dnd.js";
import writing from "../constants/writing.js";
import Button from "../components/button/index.svelte";
</script>

<!-- HTML -->
<section class="container">
  <header>
    <h1>Lorem all the ipsums 👋</h1>
    <h3>Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. As a profession, I make web-stuff at Mediasoft and Weebit.</h3>
    <Button label="Activity" />
    <Button label="More me" />
  </header>

  <section class="block">
    <section class="block__header">
      <h2>Writing</h2>
      <Button label="View all" />
    </section>

    <ul>
      {#each writing as project, i}
        {#if project.status && i < 4}
          <li>
            <a href={project.link} class="block__project">
              <p class="block__project__date">{project.date}</p>
              <p class={`block__project__category ${project.category}`}></p>
              <h4>{project.title}</h4>
              <span class={project.type}>{project.type}</span>
            </a>
          </li>
        {/if}
      {:else}
        <li>No projects found</li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <section class="block__header">
      <h2>Coding</h2>
      <Button label="View all" />
    </section>

    <ul>
      {#each code as project, i}
        {#if project.status && i < 4}
          <li>
            <a href={project.link} target="_blank" class="block__project">
              <div class={`img ${project.id}`}></div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span class={project.type}>{project.type}</span>
            </a>
          </li>
        {/if}
      {:else}
        <li>No projects found</li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <section class="block__header">
      <h2>Designing</h2>
      <Button label="View all" />
    </section>

    <ul class="block__designs">
      {#each designs as project, i}
        {#if i < 4}
          <li class={`block__design ${project.id}`}>
            <a href={project.link} target="_blank" style={`background-image: url(/images/creative/${project.id}.jpg)`}>
              <img src="/images/creative/{project.id}.jpg" alt={project.title} width="100%">
            </a>
          </li>
        {/if}
      {:else}
        <li>No projects found</li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <section class="block__header">
      <h2>D&D-ing</h2>
      <Button label="View all" />
    </section>

    <ul>
      {#each dnd as project, i}
        {#if project.status && i < 4}
          <li>
            <a href={project.link} class="block__project">
              <div class={`img ${project.id}`}></div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span class={project.type}>{project.type}</span>
            </a>
          </li>
        {/if}
      {:else}
        <li>No projects found</li>
      {/each}
    </ul>
  </section>
</section>
