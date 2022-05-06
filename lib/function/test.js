const log = require("../log");

const _test = () => {
  log.error("test");
}

module.exports = {
  test: _test,
}