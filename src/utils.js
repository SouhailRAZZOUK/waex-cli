const exists = (item, collection) => collection.find((value) => value === item) !== undefined;

const switchcaseMapMaker = (cases) => new Map(cases.map((v) => [v.case, v.callback]));

const getCaseCallback = (targetCase, cases) => {
  let resultCase;

  for (let key of cases.keys()) {
    resultCase = Array.isArray(key) && exists(targetCase, key) ?
      cases.get(key) :
      (key === targetCase) ?
        cases.get(key) :
        (cases.get("default") && resultCase === undefined) ?
          cases.get("default") :
          resultCase;
  }

  return resultCase;
};

const switchcase = (targetCase, cases) => {
  let casesMap = switchcaseMapMaker(cases);
  let callback = getCaseCallback(targetCase, casesMap);
  return (callback instanceof Function) ? callback(targetCase) : callback;
};

const toTarget = (target) => target || process.cwd();

const isWindows = () => process.platform === "win32";

const isMac = () => process.platform === "darwin";

module.exports = {
  isMac,
  isWindows,
  switchcase,
  toTarget
}