const minimist = require('minimist');
const { switchcase } = require("./utils");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const { _, b, batch, c, command, t, target, s, script } = args;
  const targetCase = c || command ? "c" : null;
  const casesMap = [
    {
      case: ["c", "command"],
      callback: require("./command")(command || c)
    },
    {
      case: "default",
      callback: () => console.log("command not found")
    }
  ];

  const job = switchcase(targetCase, casesMap);

  console.log(JSON.stringify(args, null, 2));
  console.log('Welcome to the outside!')
}