# Personal website 2016 attempt nr. 36

## Set up
1. Clone files to a new directory
2. `cd` to the this directory via command line/terminal
3. Run `npm install` to get your node_modules (default **.gitignore**)
4. Run `npm install grunt-postcss pixrem autoprefixer-core cssnano`
5. Run `bower install`
5. Check `Gruntfile.js` and look at **//Change** comments (settings at the top)
6. Run `grunt` to start developing

## Organisation
- **Dev:** Add any and all `development` content here. `Jade` for html templates
  - **Content:**: All files and folders are copied from this location, from `jade` to `html` format, **excluding** files from the  *_template* folder
  - **CSS/modules:** Contains all modular files -> `main.scss`
  - **CSS/pages:** Contains all files for custom/specific pages -> `main.scss`
  - **CSS/template:** Contains all basic template files -> `main.scss`
  - **images:** Contains all images. Using subfolder is allowed. Optimization will happen later
  - **JS/main:** Contains all custom files -> `main.js`
  - **JS/analytics.js:** In case you use Google Analytics
- **Build:** All dev changes are tracked in the *build* folder. These files are compiled for web friendly viewing. This is the working test directory when running a local server.
- **Dist:** All build files are compiled for final host purposes in the *dist* folder. These files (css, js, html & images) are optimized for the web (minified & concatenated)

## When using `dist` to go live
- Run `grunt dist` and upload everything in the `dist` folder to host via FTP.

## To publish via FTP
- Open/create .ftppass and edit/add any server with the specific name: `ServerA` (= the default server name). But don't forget that this file needs to be in the same location as your **Gruntfile.js**. You can choose a different name by changing it in the **Gruntfile.js**. Make sure it (`.ftppass`) remains in the **.ignore** for privacy reasons.
- Run `grunt ftp` (make sure to test and backup remote files _if needed_ first)
- _If creating an .ftppass file, you could use this code to set it up:_
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

## For more information
- [Source and writer](http://kenvandamme.be/) or [on Github as solo244](https://github.com/solo244)

## Requirements/used
- jQuery
- SASS for `css`
- Jade for `html`
- Grunt
- Bower
- Google Analytics for juicy stats

## Browser compatibility
- Internet Explorer 9+
- Firefox
- Chrome
- Opera
- Safari
