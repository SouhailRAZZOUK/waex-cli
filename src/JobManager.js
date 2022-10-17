const treeKill = require("tree-kill");

class JobManager {
  constructor(job) {
    if (!job) {
      throw new Error("You must assign a job to the manager");
    }

    this._jobInstance = job;
    this._jobProcess = null;
    this.isJobRunning = false;
  }

  kill() {
    if (this.isJobRunning && this._jobProcess.pid) {
      this.isJobRunning = false;
      const { pid } = this._jobProcess;

      return treeKill(pid);
    }
    return false;
  }

  run(...args) {
    if (!this.isJobRunning) {
      this._jobProcess = this._jobInstance(...args);
      this.isJobRunning = true;
    }

    return this._jobProcess;
  }

  restart(...args) {
    this.kill();
    return this.run(...args);
  }
}

module.exports = JobManager;
