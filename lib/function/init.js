const { useExec } = require("../../utils/index");
const log  = require("../log");

const _init = () => {
  useExec("git clone git@github.com:ZSRlh/webpack_5_template.git", "")
    .then(res => {
      useExec("npm install", "webpack_5_template")
        .then(res => {
          log.success("Done!")
          process.exit();
        })
        .catch(err => {
          log.error("Install error!")
          process.exit();
        });
      log.waiting("waiting for install...");
    })
    .catch(err => {
      log.error("Clone error!");
      process.exit();
    });
  log.waiting("waiting for clone...");
}

module.exports = {
  init: _init,
}