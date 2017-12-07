# Personal website attempt nr. 36 (v1.2)

## Release
Is now live since December 2016: [https://kenvandamme.be/](https://kenvandamme.be/) & [https://kenvandamme.com/](https://kenvandamme.com/)

## About
Webdesigner, webdeveloper, teacher, gamer, moron, realist, procrastinator, fast talker, nerd, distracted by pretty colors. I think thats by far the best description I can give you.

## For more information
- [Source and writer](https://kenvandamme.be/) or [on Github as solo244](https://github.com/solo244)

## Requirements/used
- jQuery
- SCSS for `css`
- Pug for `html`
- Gulp
- Bower
- Yarn
- Google Analytics for juicy stats

## Browser compatibility
- Internet Explorer 11+ & Edge
- Firefox (latest version)
- Chrome (latest version)
- Opera (latest version)
- Safari (latest version)

## Set up
1. Clone files to a new directory
2. `cd` to the this directory via command line/terminal
3. Run `yarn install` to get your node_modules (default **.gitignore**)
4. Check `package.json` and make changes in **general info, paths, vars and url** where needed
5. Run **gulp commands** to start developing

## Gulp commands
- To run an active watch with BrowserSync, run `gulp`
- To only run the Critical path **for dist**: `gulp critical`
- To only run the JS vendor files: `gulp vendors`
- To only run the JS custom files: `gulp js`
- To only run the SASS files: `gulp css`
- To only run the Pug files: `gulp pug`
- To only run the image files: `gulp images`
- To only run the font files: `gulp fonts`
- To only run the favicon files: `gulp favicon`

## Organisation
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

## To publish via FTP
- Before deploying, you need to have run a general build so you have a build folder that's up to date, then run the `gulp critical`, before finally running the `gulp ftp` command.
- Open/create `.ftppass` (root dir) and edit/add any server with the specific name: `ServerA` (= the default server name). But don't forget that this file needs to be in the same location as your **Gulpfile.js**. You can choose a different name by changing it in the **Gulpfile.js**. Make sure it remains in the **.ignore** for privacy reasons.
- Run `gulp ftp` (make sure to test and backup remote files _if needed_ first)
- The command overwrites any excisting files, creates non-existing ones and it doesn't delete others.
- _When creating your own .ftppass file, you could use this code to set it up:_
```json
{
  "ServerA": {
    "username": "putyourownusernamehere",
    "password": "putyourpasswordhere"
  },
  "anotherServerifYouNeedItButItsOptional": {
    "username": "putyourownusernamehere",
    "password": "putyourpasswordhere"
  }
}
```

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

### Todo for v1.3
- [ ] When switching projects, the animation is "spotty"
- [ ] Reload Github stats via alt source
- [ ] Add update block on homepage
- [ ] In between overview on tutorials page

### Planned for v1.4
