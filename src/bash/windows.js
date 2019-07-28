const { spawn } = require('child_process');

module.exports = (batchFile) => (targetPath) => {

  const cwd = targetPath || process.cwd();
  const config = {
    cwd,
  };
  const bat = spawn(batchFile, ['/c', 'my.bat'], config);

  bat.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  bat.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });

}