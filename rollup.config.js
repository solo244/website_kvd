import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import autoPreprocess from "svelte-preprocess";
import svg from "rollup-plugin-svg-import";

const production = !process.env.ROLLUP_WATCH;

const preprocess = autoPreprocess({
  scss: {
    includePaths: ["src"],
  },
  postcss: {
    plugins: [require("autoprefixer")],
  },
});

const MAIN = {
	input: "src/main.js",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "public/build/main.js"
	}
};

const COMMON = {
	plugins: [
		svg({ stringify: true }),
		svelte({
			dev: !production,
			preprocess,
			css: css => {
				css.write("public/build/bundle.css");
			}
		}),

		resolve({
			browser: true,
			dedupe: importee => importee === "svelte" || importee.startsWith("svelte/")
		}),
		commonjs(),

		!production && serve(),
		!production && livereload("public"),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

export default [
	Object.assign({}, MAIN, COMMON),
];

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
					stdio: ["ignore", "inherit", "inherit"],
					shell: true
				});
			}
		}
	};
}
