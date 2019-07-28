const { exec } = require("child_process");

module.exports = (bashFile) => (targetPath) => {

    const cwd = targetPath || process.cwd();
    const config = {
        cwd,
    };

    console.log(`Executing bash: \`${bashFile}\` On path: ${cwd}`);

    exec(bashFile, config, (error, stdout, stderror) => {
        console.log("error", error);
        console.log("stdout", stdout);
        console.log("stderror", stderror);
    });

}
