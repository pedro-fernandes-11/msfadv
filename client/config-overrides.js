const path = require("path")

module.exports = function override(config, env) {
  config.entry = path.resolve(__dirname, "src", "index.jsx")
  return config
}
