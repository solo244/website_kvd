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
    } else if (loc.startsWith(testdomain + "/code") || loc.startsWith(domain + "/code")) {
      active="code";
    } else if (loc.startsWith(testdomain + "/tutorials") || loc.startsWith(domain + "/tutorials")) {
      active="tutorials";
    } else if (loc.startsWith(testdomain + "/creative") || loc.startsWith(domain + "/creative")) {
      active="creative";
    } else if (loc.startsWith(testdomain + "/dnd") || loc.startsWith(domain + "/dnd")) {
      active="dnd";
    }
    else {
      active= "";
    }
  }, 100);
}

setActive();
</script>

<!-- HTML -->
<nav class="header">
  <div class="breadcrumbs">
    <a href="/" class="logo">
      {@html Logo}
    </a>
    <span>?</span>
  </div>
  <ul class="menu">
    <li><a class:active={active === "home"} class="link-home" href="/" on:click={() => setActive()}>Home</a></li>
    <li><a class:active={active === "code"} class="link-code" href="/code" on:click={() => setActive()}>Code</a></li>
    <li><a class:active={active === "tutorials"} class="link-tutorials" href="/tutorials" on:click={() => setActive()}>Tutorials</a></li>
    <li><a class:active={active === "creative"} class="link-creative" href="/creative" on:click={() => setActive()}>Creative</a></li>
    <li><a class:active={active === "dnd"} class="link-dnd" href="/dnd" on:click={() => setActive()}>D&D</a></li>
  </ul>
</nav>
