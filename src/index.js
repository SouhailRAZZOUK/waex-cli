const minimist = require('minimist');
const { switchcase } = require("./utils");
const execCommand = require("./command");
const execBash = require("./bash");
const watch = require("./watch");
const ioHook = require("iohook");

const R = 19;

ioHook.start();

ioHook.registerShortcut([R], (keys) => {
  console.log('Reloading ...', keys);
});

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const { _, b, batch: bash, c, command, t, target, s, script } = args;
  const targetCase = (c || command || b || bash);
  const targetPath = t || target;
  const casesMap = [
    {
      case: [c, command],
      callback: () => execCommand(command || c)
    },
    {
      case: [b, bash],
      callback: () => execBash(bash || b)
    },
    {
      case: "default",
      callback: () => console.log("Command not found !!")
    }
  ];

  const job = switchcase(targetCase, casesMap);
  job && watch(job, targetPath);

  console.log(JSON.stringify(args, null, 2));
  console.log('Welcome to the outside!')
}