const { useExec } = require("../../utils/index");
const log = require("../log");

const _run = () => {
  // TODO: 怎么让webpack能和icli交互获取服务器状态
  useExec("webpack serve")
    .then(res => {
      log.success("Server is listening...");
      process.exit();
    })
    .catch(err => {
      log.error("Server started failed!")
      process.exit();
    })
  log.success("Server is listening...");
  
};

module.exports = {
  run: _run,
}