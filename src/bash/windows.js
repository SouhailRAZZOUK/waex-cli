const { spawn } = require('child_process');

module.exports = (batchFile, args = []) => (targetPath) => {

  const cwd = targetPath || process.cwd();
  const config = {
    cwd,
  };
  const batchProcess = spawn(batchFile, args, config);

  batchProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  batchProcess.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  batchProcess.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
  
  return batchProcess;
}