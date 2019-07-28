const forWindows = require("./windows");
const forUnix = require("./unix");
const { isWindows } = require("../utils");

module.exports = isWindows() ? forWindows : forUnix;