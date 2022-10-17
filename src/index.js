const minimist = require("minimist");
const { switchcase } = require("./utils");
const execCommand = require("./command");
const execBash = require("./bash");
const watch = require("./watch");
const JobManager = require("./JobManager");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const { _, b, bash: bash, c, command, t, target, s, script } = args;
  const targetCase = c || command || b || bash;
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
      callback: () => {
        console.log("Command not found !!");
        return;
      }
    }
  ];

  const job = switchcase(targetCase, casesMap);
  const jobManager = new JobManager(job);
  jobManager.run(targetPath);

  if (jobManager) console.log("Watching ...") || watch(jobManager, targetPath);
};
