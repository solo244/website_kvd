# Personal website attempt with Svelte (v2)

## Release
Is live since December 2016: [https://kenvandamme.be/](https://kenvandamme.be/) & [https://kenvandamme.com/](https://kenvandamme.com/)

## About
Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. I think thats by far the best description I can give you.

## For more information
- [Source and writer](https://kenvandamme.be/) or [on Github as solo244](https://github.com/solo244)

## Requirements/used
- Svelte
- SCSS for `css`
- Yarn
- Google Analytics for juicy stats

## Commands
`npm run dev`

## Set up
1. Clone files to a new directory
2. `cd` to the this directory via command line/terminal
3. Run `npm install` to get your node_modules (default **.gitignore**)
4. Check `package.json` and make changes in **general info, paths, vars and url** where needed
5. Run **dev command** to start developing

## Organisation (todo)
- **Dev:** Add any and all `development` content here. `Pug` for html templates
  - **Views:**: All files and folders are copied from this location, from `Pug` to `HTML` format, **excluding** files from the  *_layout* folder
  - **CSS/modules:** Contains all modular files -> `main.scss`
  - **CSS/pages:** Contains all files for custom/specific pages -> `main.scss`
  - **CSS/template:** Contains all basic template files -> `main.scss`
  - **images:** Contains all images. Using subfolder is allowed. Optimization will happen later
  - **JS/vendor:** Contains all vendor files -> `vendor.js`
  - **JS/main:** Contains all custom files -> `main.js`
- **Build:** All dev changes are tracked in the *build* folder. These files are compiled for web friendly viewing. This is the working test directory when running a local server.
- **Dist:** All build files are compiled for final host purposes in the *dist* folder. These files (css, js, html & images) are optimized for the web (minified & concatenated). Paths are changed where needed to fit the need of the server. Before upload this folder is emptied and after upload this folder is deleted.

## To publish via Netlify (todo)

## Log (current v1.2)
### Version 1.0
- Provide a page to collect all links
- Align the number "1" better for the submenu Tutorials
- Add a fallback for older browsers
- Tutorial needs an overview to go back to
- The updates on the home page needs to be a slideshow <- DEPCR.
- Limited the number of social media (to only active ones)

### Version 1.1
- Detailed package file
- Update jade to pug files
- Yarn
- Update Grunt to Gulp

### Version 1.2
- Added ITS-United project
- Progressive images with Imaginemin
- Change path var in pug instead of replace in gulp
- Lazyload images on design page
- Refactor and clean up all css
- Refactor and clean up all js

### Version 1.3
- Save tutorials previously visited
- Reload Github stats via alt source
- Add update block on homepage
- In between overview on tutorials page
- Remove sourcemapping in production
- Add background images to main headers

### Version 2
- Switch to Svelte

### Ideas
- Reading bar to show progress for tutorials
- Grading system for tutorials via emoticons
