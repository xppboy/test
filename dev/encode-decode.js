const iconv = require('iconv-lite');
let fs = require("fs");
const toolkit = require('../help/toolkit');
const chardet = require('chardet');

// let test = toolkit.encode('测试', 'gbk');
// let str = toolkit.decode(test, 'gbk');
// console.log(toolkit.chardet('../input.txt'));
// 编码
let buf = iconv.encode('����һ�����ԡ�', 'gbk');
console.log(buf);
// 解码
let str = iconv.decode('这是一个测试。', 'utf8');
console.log(str);

//判断是否支持的编码
// console.log(iconv.encodingExists("urf8"));

//判断文件编码
// let res = chardet.detectFileSync('../public/input.txt');
// let result = chardet.detectFileAllSync('../public/input.txt');
// console.log(res);
// console.log(result);

// console.log('😎'.charCodeAt(0).toString(16));//编码为unicode


// let toolkit = require('../help/toolkit');
// let str = '貨到前請先送貨人員打電話\\n以免我在上班 家裡也會有老人家🧓謝謝你們';
// let str2 = '笑死😂😂😂👍👍這你自己想出來的嗎😳😳很厲害欸😎😎 哈哈是我啦你是不是很懂嘻哈啊skrskr🤙🤙🤙😎😎😎👊👊👊🖕🖕🖕🖖🖖🖖 peace 笑死😂😂😂👍👍這你自己想出來的嗎😳😳很厲害欸😎😎';
// let res = toolkit.handle_char(str);
// let res2 = toolkit.handle_char(str2);
// console.log(res);
// console.log(res2);
// console.log('😎'.charCodeAt(0).toString(16));
// console.log('🤙'.charCodeAt(0).toString(16));
// console.log(escape('😎'));


//读取文件
// fs.readFile("../public/input.txt",function (err,data) {
//     if(err) console.log(err);
//     data = iconv.decode(data,'utf8');
//     console.log(data);
// });
