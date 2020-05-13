<!-- Styles -->
<style lang="scss">
@import "./pages.scss";
</style>

<!-- Scripts -->
<script>
import Bell from "../images/icons/bell.svg";
// import Code from "../images/icons/code.svg";
import Github from "../images/icons/github.svg";
import Umbrella from "../images/icons/umbrella.svg";
import code from "../constants/code.js";
</script>

<!-- HTML -->
<section>
	<h1>Comic Sans is never an acceptable font. Unless you are an 8 year old girl writing a poem about unicorns.</h1>
</section>

<section class="code-filters">
  <div class="website">
		<!-- {@html Code} -->
		<div class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
				<g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)">
					<polyline points="14 12 20 6 14 0"/>
					<polyline points="6 0 0 6 6 12"/>
				</g>
			</svg>
		</div>
		<div class="content">
			<span>2 websites</span>
    	<h2>Website</h2>
		</div>
  </div>
	<div class="github">
		<div class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
				<g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)">
					<polyline points="14 12 20 6 14 0"/>
					<polyline points="6 0 0 6 6 12"/>
				</g>
			</svg>
		</div>
		<div class="content">
			<span>3 projects</span>
    	<h2>Github</h2>
		</div>
  </div>
	<div class="extensions">
		<div class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
				<g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)">
					<polyline points="14 12 20 6 14 0"/>
					<polyline points="6 0 0 6 6 12"/>
				</g>
			</svg>
		</div>
		<div class="content">
			<span>1 extension, some apps</span>
    	<h2>Extensions</h2>
		</div>
  </div>
	<div class="random">
		<div class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
				<g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)">
					<polyline points="14 12 20 6 14 0"/>
					<polyline points="6 0 0 6 6 12"/>
				</g>
			</svg>
		</div>
		<div class="content">
			<span>3 rando's</span>
    	<h2>Random</h2>
		</div>
  </div>
</section>

<!-- -Website
Stalstudio
It's United
The Critical Chronicles
Homebrew

-Extensions/apps
Burntabs
Mine
Bernie apps
D&D

-Github
DACSS
Reboot
New gulp
New CMS
New Electron

-Random
ms-fe
I got this card game
The Daisies
Dashboard
D&D stats -->

<section class="code-projects">
	{#each code as project}
		<a href={project.link} target="_blank" class={"code-" + project.id}>
			<div class="img"></div>
			<div class="c1"></div>
			<div class="c2"></div>
			<div class="c3"></div>
			<div class="c4"></div>
			<h2>{project.title}<span></span></h2>
			<p>{project.description}</p>
			<img src={"/images/" + project.id + "-phone.png"} alt={project.title}>
		</a>
	{/each}
</section>
