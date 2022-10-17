const { R, LEFTALT, CTRL } = require("./constants");
const ioHook = require("iohook");
const watch = require("node-watch");

module.exports = (jobManager, target) => {
  const targetPath = target || process.cwd();

  ioHook.start();

  ioHook.registerShortcut([CTRL, LEFTALT, R], () => {
    jobManager.restart(targetPath);
  });

  // ioHook.on("keydown", keys => {
  //   console.log("TCL: keys", keys);
  // });

  watch(targetPath, { recursive: false }, () => {
    jobManager.restart(targetPath);
  });
};
