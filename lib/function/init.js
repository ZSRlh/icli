const { useExec } = require("../../utils/index");
const _init = () => {
  useExec("git clone git@github.com:ZSRlh/webpack_5_template.git", "")
    .then(res => {
      console.log(res);
      useExec("npm install", "webpack_5_template")
        .then(res => {
          console.log('succ', res)
          process.exit();
        })
        .catch(err => {
          console.log(err);
          process.exit();
        })
    })
    .catch(err => {
      console.log(err);
      process.exit();
    });
}

module.exports = {
  init: _init,
}