const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  return alias({
    "@components": "./components",
    "@constants": "./constants",
    "@images": "./images",
    "@pages": "./pages",
    "@styles": "./styles",
    "@utils": "./utils",
  })(config);
};
