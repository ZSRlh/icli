const { useExec } = require("../../utils/index");

const _run = () => {
  useExec("webpack serve")
    .then(res => {
      console.log(res);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    })
};

module.exports = {
  run: _run,
}