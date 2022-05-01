const program = require("commander");
const meta = require("../package.json");
const log = require("./log");

program
  .version(log.info(`v${meta.version}`), "-v | --version")
  .description("i/cli program test")
  .option("-n | --name <name>", "your name", "ZSR");

program.parse(process.argv);

