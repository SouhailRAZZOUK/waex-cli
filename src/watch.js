const watch = require("node-watch");

module.exports = (job, target) => {
    const targetPath = target || process.cwd();
    watch(targetPath, {recursive: false}, () => job(targetPath));
}

