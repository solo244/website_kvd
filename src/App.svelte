<!-- Styles -->
<style lang="scss" global>
@import "./styles/reset";
@import "./styles/normalise";

main {
  // width: 1400px;
  // max-width: 100%;
  // margin-left: auto;
  // margin-right: auto;
}
</style>

<!-- Scripts -->
<script>
	import router from "page";
	import routes from "./constants/routes.js";
	import util from "./constants/utils.js";

	import Header from "./components/header/index.svelte";

	let page;
	let params;

  routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = ctx.params
        next();
			},
      () => {
        if (route.auth && ! user) {
          router.redirect('/login');
        } else {
          page = route.component;
        }
      }
    )
	});

	router.start();
</script>

<!-- HTML -->
<Header />

<main>
  <svelte:component this={page} params={params} />
</main>
