const { exec } = require("child_process");

const useExec = (cmdStr, cwd) => new Promise((resolve, reject) => {
  exec(cmdStr, { cwd }, (error, stdout, stderr) => {
    if (error) {
      reject(error);
    }
    resolve(stdout);
  })
});

module.exports = {
  useExec,
}