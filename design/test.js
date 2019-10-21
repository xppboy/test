const exec = require('child_process').exec;
const cmd = 'ping';
exec(cmd, (err, stdout, stderr) => {
   if (err) return console.error('err', err);
    console.log(stdout);
});

