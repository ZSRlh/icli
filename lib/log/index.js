const chalk = require("chalk"); // chalk v5 不支持commenjs，需要用v5以下的版本

const genSuccessStr = msg => `${chalk.bgGreen(" SUCCESS ")}  ${chalk.green(msg)}`;
const genWaitingStr = msg => `${chalk.bgBlue(" WAITING ")}  ${chalk.blue(msg)}`;
const genErrorStr = msg => `${chalk.bgRed(" ERROR ")}  ${chalk.red(msg)}`;
const genInfoStr = msg => `${chalk.bgWhite(" INFO ")}  ${msg}`;

module.exports = {
  success: msg => console.log(genSuccessStr(msg)),
  waiting: msg => console.log(genWaitingStr(msg)),
  error: msg => console.log(genErrorStr(msg)),
  info: msg => console.log(genInfoStr(msg)),
}