const { exec } = require("child_process");

module.exports = (command) => {
    console.log("Executing Command: \`\`")
    exec(command, (error, stdout, stderror) => {
        console.log("error", error);
        console.log("stdout", stdout);
        console.log("stderror", stderror);
    });
}

// exec('pwd', {
//     cwd: '/home/user/directory'
// }, function (error, stdout, stderr) {
//     // work with result
// });