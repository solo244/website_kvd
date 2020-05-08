import Home from "../pages/home.svelte";
import Code from "../pages/code.svelte";
import Tutorials from "../pages/tutorials.svelte";
import Creative from "../pages/creative.svelte";
import Dnd from "../pages/dnd.svelte";
import Error from "../pages/error.svelte";

export default [
  {
    path: "/",
    component: Home,
    title: "HOME"
  },
  {
    path: "/code",
    component: Code,
    title: "CODE"
  },
  {
    path: "/tutorials",
    component: Tutorials,
    title: "TUTORIALS"
  },
  {
    path: "/creative",
    component: Creative,
    title: "CREATIVE"
  },
  {
    path: "/dnd",
    component: Dnd,
    title: "DND"
  },
  {
    path: "*",
    component: Error,
    title: "ERROR"
  }
];
