const skills = [
  {
    title: "A11y",
    progress: 60,
    link: "https://www.a11yproject.com/",
  },
  {
    title: "Algolia",
    progress: 1,
    link: "https://www.algolia.com/",
  },
  {
    title: "Alpine",
    progress: 1,
    link: "https://github.com/alpinejs/alpine",
  },
  {
    title: "Apollo",
    progress: 1,
    link: "https://www.apollographql.com/",
  },
  {
    title: "Astro",
    progress: 1,
    link: "https://astro.build/",
  },
  {
    title: "AWS",
    progress: 1,
    link: "https://aws.amazon.com/",
  },
  {
    title: "Bootstrap",
    progress: 100,
    link: "https://getbootstrap.com/",
  },
  {
    title: "Bun",
    progress: 1,
    link: "https://bun.sh/",
  },
  {
    title: "Chai",
    progress: 80,
    link: "https://www.chaijs.com/",
  },
  {
    title: "Craft CMS",
    progress: 1,
    link: "https://craftcms.com/",
  },
  {
    title: "CSS3",
    progress: 100,
    link: "https://www.w3schools.com/css/",
  },
  {
    title: "Cypress",
    progress: 40,
    link: "https://www.cypress.io/",
  },
  {
    title: "Deno",
    progress: 1,
    link: "https://deno.land/",
  },
  {
    title: "Docker",
    progress: 60,
    link: "https://www.docker.com/",
  },
  {
    title: "Drupal",
    progress: 80,
    link: "https://www.drupal.org/",
  },
  {
    title: "Electron",
    progress: 80,
    link: "https://www.electronjs.org/",
  },
  {
    title: "Eleventy",
    progress: 80,
    link: "https://www.11ty.dev/",
  },
  {
    title: "Emotion",
    progress: 1,
    link: "https://emotion.sh/docs/introduction",
  },
  {
    title: "Express",
    progress: 1,
    link: "https://expressjs.com/",
  },
  {
    title: "Fauna",
    progress: 1,
    link: "https://fauna.com/",
  },
  {
    title: "Figma",
    progress: 70,
    link: "https://www.figma.com/",
  },
  {
    title: "Firebase",
    progress: 100,
    link: "https://firebase.google.com",
  },
  {
    title: "Flutter",
    progress: 1,
    link: "https://flutter.dev",
  },
  {
    title: "Forestry",
    progress: 80,
    link: "https://forestry.io/",
  },
  {
    title: "Frontity",
    progress: 1,
    link: "https://frontity.org/",
  },
  {
    title: "Git",
    progress: 100,
    link: "https://git-scm.com/",
  },
  {
    title: "GraphQL",
    progress: 1,
    link: "https://graphql.org/",
  },
  {
    title: "Gulp",
    progress: 100,
    link: "https://gulpjs.com/",
  },
  {
    title: "HTML5",
    progress: 100,
    link: "https://www.w3schools.com/html/",
  },
  {
    title: "Javascript",
    progress: 100,
    link: "https://www.javascript.com/",
  },
  {
    title: "Jekyll",
    progress: 100,
    link: "https://jekyllrb.com/",
  },
  {
    title: "Jest",
    progress: 10,
    link: "https://jestjs.io/",
  },
  {
    title: "Karma",
    progress: 80,
    link: "https://karma-runner.github.io/latest/index.html",
  },
  {
    title: "Less",
    progress: 100,
    link: "http://lesscss.org/",
  },
  {
    title: "Mocha",
    progress: 80,
    link: "https://mochajs.org/",
  },
  {
    title: "MobX",
    progress: 1,
    link: "https://mobx.js.org/README.html",
  },
  {
    title: "Mollie",
    progress: 1,
    link: "https://www.mollie.com/en",
  },
  {
    title: "Netlify",
    progress: 100,
    link: "https://www.netlify.com/",
  },
  {
    title: "Netlify CMS",
    progress: 80,
    link: "https://www.netlifycms.org/",
  },
  {
    title: "Next",
    progress: 90,
    link: "https://nextjs.org/",
  },
  {
    title: "Nhost",
    progress: 10,
    link: "https://nhost.io/",
  },
  {
    title: "Nuxt",
    progress: 1,
    link: "https://nuxtjs.org/",
  },
  {
    title: "PostCSS",
    progress: 50,
    link: "https://postcss.org/",
  },
  {
    title: "Preact",
    progress: 1,
    link: "https://preactjs.com/",
  },
  {
    title: "Prisma",
    progress: 1,
    link: "https://www.prisma.io/",
  },
  {
    title: "Prismic",
    progress: 1,
    link: "https://prismic.io/",
  },
  {
    title: "Puppeteer",
    progress: 40,
    link: "https://pptr.dev/",
  },
  {
    title: "Python",
    progress: 1,
    link: "https://www.python.org/",
  },
  {
    title: "Qwik",
    progress: 1,
    link: "https://qwik.builder.io/",
  },
  {
    title: "React",
    progress: 100,
    link: "https://reactjs.org/",
  },
  {
    title: "React Native",
    progress: 1,
    link: "https://reactnative.dev/",
  },
  {
    title: "Redis",
    progress: 1,
    link: "https://redis.io/",
  },
  {
    title: "Reducers",
    progress: 40,
    link: "https://www.robinwieruch.de/javascript-reducer",
  },
  {
    title: "Redux",
    progress: 60,
    link: "https://redux.js.org/",
  },
  {
    title: "Responsive",
    progress: 100,
    link: "https://www.w3schools.com/html/html_responsive.asp",
  },
  {
    title: "Sapper",
    progress: 100,
    link: "https://sapper.svelte.dev/",
  },
  {
    title: "SASS",
    progress: 100,
    link: "https://sass-lang.com/",
  },
  {
    title: "Sentry IO",
    progress: 20,
    link: "https://sentry.io/welcome/",
  },
  {
    title: "SEO",
    progress: 100,
    link: "https://moz.com/beginners-guide-to-seo",
  },
  {
    title: "Sketch",
    progress: 100,
    link: "https://www.sketch.com/",
  },
  {
    title: "Snowpack",
    progress: 1,
    link: "https://www.snowpack.dev/",
  },
  {
    title: "Storybook",
    progress: 60,
    link: "https://storybook.js.org/",
  },
  {
    title: "Solid",
    progress: 1,
    link: "https://solidjs.com/",
  },
  {
    title: "Styled Components",
    progress: 100,
    link: "https://styled-components.com/",
  },
  {
    title: "Supabase",
    progress: 90,
    link: "https://app.supabase.io/",
  },
  {
    title: "Stripe",
    progress: 50,
    link: "https://stripe.com",
  },
  {
    title: "Svelte",
    progress: 100,
    link: "https://svelte.dev/",
  },
  {
    title: "Symfony",
    progress: 1,
    link: "https://symfony.com/",
  },
  {
    title: "Tailwind",
    progress: 80,
    link: "https://tailwindcss.com/",
  },
  {
    title: "Tauri",
    progress: 1,
    link: "https://tauri.app/",
  },
  {
    title: "ThreeJS",
    progress: 1,
    link: "https://threejs.org/",
  },
  {
    title: "tRPC",
    progress: 1,
    link: "https://trpc.io/",
  },
  {
    title: "Typescript",
    progress: 1,
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Turbopack",
    progress: 1,
    link: "https://turbo.build/",
  },
  {
    title: "Vercel",
    progress: 70,
    link: "https://vercel.com",
  },
  {
    title: "Vite",
    progress: 1,
    link: "https://vitejs.dev/",
  },
  {
    title: "Vue",
    progress: 1,
    link: "https://vuejs.org/",
  },
  {
    title: "Webpack",
    progress: 90,
    link: "https://webpack.js.org/",
  },
  {
    title: "Websockets",
    progress: 40,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  {
    title: "Wordpress",
    progress: 80,
    link: "https://wordpress.com/",
  },
];

export default skills;
