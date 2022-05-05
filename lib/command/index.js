const program = require("commander");
const meta = require("../../package.json");
const log = require("../log");
const { init, run } = require("../function/index");

program
  .version(log.info(`v${meta.version}`), "-v, --version")
  .description("i/cli program test")
  .option("-n, --name <name>", "your name")
  .option("-c, --config <config>", "config")
  .action((cmd) => {
    console.log(cmd);
  })

program
  .command("init")
  .description("i/cli init")
  .option("-t, --template <template>", "init template", "js")
  .action((cmd) => {
    const { template } = cmd;
    if (template === "js") {
      console.log("js template");
      init();
    } else if (template === "ts") {
      console.log("ts template");
    }
  })

program
  .command("run")
  .description("i/cli run")
  .option("-m, --mode <mode>", "run config")
  .action(({ mode }) => {
    run();
  })

program.parse(process.argv);

