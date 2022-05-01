const program = require("commander");
const meta = require("../package.json");

program
  .version(`v${meta.version}`, "-v | --version")
  .description("i/cli program test")
  .option("-n | --name <name>", "your name", "ZSR");

program.parse(process.argv);

