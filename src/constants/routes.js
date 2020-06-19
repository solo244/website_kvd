import Home from "../pages/home.svelte";
import Code from "../pages/coding.svelte";
import Write from "../pages/writing.svelte";
import Create from "../pages/designing.svelte";
import Dnd from "../pages/dnding.svelte";
import Error from "../pages/error.svelte";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/coding",
    component: Code
  },
  {
    path: "/writing",
    component: Write
  },
  {
    path: "/designing",
    component: Create
  },
  {
    path: "/dnding",
    component: Dnd
  },
  {
    path: "*",
    component: Error
  }
];
