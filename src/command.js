const { exec } = require("child_process");

module.exports = (command) => (targetPath) => {

    const cwd = targetPath || process.cwd();
    const config = {
        cwd,
    };

    console.log(`Executing Command: \`${command}\` On path: ${cwd}`);

    return exec(command, config, (error, stdout, stderror) => {
        console.log("error", error);
        console.log("stdout", stdout);
        console.log("stderror", stderror);
    });

}
