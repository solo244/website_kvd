<!-- Styles -->
<style lang="scss">
@import "header.scss";
</style>

<!-- Scripts -->
<script>
import Logo from "../../images/logo-42.svg";
const domain = "https://www.kenvandamme.be";
const testdomain = "http://localhost:5000"
let active = "";

const setActive = () => {
  setInterval(function() {
    const loc = window.location.href;

    if (loc.endsWith("5000/") || loc.endsWith("kenvandamme.be/") || loc.endsWith("kenvandamme.be")) {
      active = "home";
    } else if (loc.startsWith(testdomain + "/coding") || loc.startsWith(domain + "/coding")) {
      active="coding";
    } else if (loc.startsWith(testdomain + "/writing") || loc.startsWith(domain + "/writing")) {
      active="writing";
    } else if (loc.startsWith(testdomain + "/designing") || loc.startsWith(domain + "/designing")) {
      active="designing";
    } else if (loc.startsWith(testdomain + "/dnding") || loc.startsWith(domain + "/dnding")) {
      active="dnding";
    }
    else {
      active= "";
    }
  }, 100);
}

setActive();
</script>

<!-- HTML -->
<nav class="container--header">
  <div class="breadcrumbs">
    <a href="/" class="logo">
      {@html Logo}
    </a>
    <span>?</span>
  </div>
  <ul class="menu">
    <li><a class:active={active === "home"} class="link-home" href="/" on:click={() => setActive()}>Home</a></li>
    <li><a class:active={active === "coding"} class="link-code" href="/coding" on:click={() => setActive()}>Coding</a></li>
    <li><a class:active={active === "writing"} class="link-tutorials" href="/writing" on:click={() => setActive()}>Writing</a></li>
    <li><a class:active={active === "designing"} class="link-creative" href="/designing" on:click={() => setActive()}>Designing</a></li>
    <li><a class:active={active === "dnding"} class="link-dnd" href="/dnding" on:click={() => setActive()}>D&Ding</a></li>
  </ul>
</nav>
