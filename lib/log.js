const chalk = require("chalk"); // chalk v5 不支持commenjs，需要用v5以下的版本

module.exports = {
  success: msg => chalk.green(msg),
  info: msg => msg,
  error: msg => chalk.redBright(msg),
}