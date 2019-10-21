// const fs = require('fs');
// const child_process = require('child_process');
// for(let i=0; i<3; i++) {
//     let childProcess = child_process.fork("node-childPro.js", [i]);
//     childProcess.on('close', function (code) {
//         console.log('子进程已退出，退出码 ' + code);
//     });
// }


const child_process = require('child_process');
let execArgv = process.execArgv;
// if (global.env === 'devlopment') {
//     let port;
//     process.execArgv.map(function (item) {
//         if (item.indexOf('-brk') >= 0) {
//             port = item.substring(item.indexOf('=') + 1, item.length);
//             port = parseInt(port) + 1;
//         }
//     });
//     execArgv = port ? ['--inspect-brk=' + prot] : execArgv;
// }
// let child = child_process.fork('node-childPro.js', [1,2,3]); // 第一个参数为子进程文件
let child = child_process.fork('node-childPro.js'); // 第一个参数为子进程文件

child.on('close', function (data) {
    console.log('close', data); // 监听子进程关闭
});

child.on('message', async function (data) {
    console.log('message', data); // 监听子进程信息
});

child.send('hello'); // 发送信息给子进程
child.send({Info: 'world'});
