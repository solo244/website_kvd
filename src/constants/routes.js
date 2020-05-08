import Home from "../pages/home.svelte";
import Code from "../pages/code.svelte";
import Tutorials from "../pages/tutorials.svelte";
import Creative from "../pages/creative.svelte";
import Dnd from "../pages/dnd.svelte";
import Error from "../pages/error.svelte";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/code",
    component: Code
  },
  {
    path: "/tutorials",
    component: Tutorials
  },
  {
    path: "/creative",
    component: Creative
  },
  {
    path: "/dnd",
    component: Dnd
  },
  {
    path: "*",
    component: Error
  }
];
