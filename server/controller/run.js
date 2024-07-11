
const { spawn } = require('child_process');
// const utf8 = require('utf8');
let sendFiles="my name is gouri";

const pythonProcess = spawn('python', ['list.py',sendFiles,"hi"]);

pythonProcess.stdout.on('data',(data) => {
  console.log(data.toString());
});
pythonProcess.stderr.on('data', data => {
    console.log('Error output from Python:', data.toString());
  });
