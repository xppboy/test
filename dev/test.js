// const request = require('request');
// const util = require('util');
// const get = util.promisify(request.get);
//
// (async function () {
//     console.log(get('http://baidu.com'));
// })()

// let test = '123456';
// if(test[0]===','){
//     test = test.substr(1);
// }
// console.log(test);


// const util = require('util');
// const request = require('request');
// const get_synchro = util.promisify(request.get);
// const post_synchro = util.promisify(request.post);
// const request_synchro = util.promisify(request);
//
// function get(url,headers){
//     return request_synchro({
//         url: url,
//         method: 'GET',
//         headers: headers || {}
//     });
// }
// let url = 'https://gz.17zwd.com/item.htm?GID=110203118&spm=13858f5be979327e.42.101.0.0.173800';
// let header = {
//     'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
// };
// // let html = get(url,header);
// let html = get_synchro(url);
// console.log(html);
// let string = '  qwezasdfzf  ';
// console.log(string.startsWith('st',2));
// console.log(string.endsWith('12345678',8));
// console.log(string.charAt(3));
// console.log(string.repeat(3));
// console.log(string.padEnd('xxx'));
// console.log(string.padStart('xxxx'));
// console.log(string.trim());

// function* _testYieldExpression(){
//     let value = '';
//     value = yield 'yield value';
//     console.info(`1 value is: ${value}`);//输出1
//
//     value = yield 'yield value';
//     console.info(`2 value is: ${value}`);//输出2
//     return 'over';
// }
//
// let _testIterator = _testYieldExpression();
// let _res = _testIterator.next(123);
// console.info(`1:no params to next, result is: ${_res.value}`);//输出3
//
// _res = _testIterator.next(456);
// console.info(`2:params to next, result is: ${_res.value}`);//输出4
//
// _res = _testIterator.next(789);
// console.info(`3:params to next, result is: ${_res.value}`);//输出5

// let arr = [1,2,3]
// function *list() {
//     let num = null;
//     for(let item of arr){
//         yield num = item;
//         console.log(num);
//     }
//     return 7
// }
// let test = list();
// console.log(test.next());
// arr.push(4);
// console.log(test.next(999));
// arr.push(5);
// console.log(test.next());
// arr.push(6);
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());

// let obj2={
//     name:'小李',
//     age:'16'
// }
// var obj={
//     name:'小张',
//     age:'17',
//     myFun:function () {
//         console.log(this.name+'年龄'+this.age);
//     }
// }
//
// console.log(obj.age);
// obj.myFun.call(obj2);
// let a = '';
// if(a){
//     console.log(true, a);
// }else{
//     console.log(false, a);
// }

//随机数
// console.log(Math.floor(Math.random()*10));
// const path = require('path');
// const toolkit = require('../help/toolkit');
// const fs = require('fs');
// console.log(toolkit.isexistall(path.resolve(__dirname), ['excel.js','buffer.js','result.xlsx','abc.js']));
// console.log(toolkit.isexistalltoname(path.resolve(__dirname), ['wer.adf', 'excel.js','buffer.js','result.xlsx','abc.js']));
// console.log(fs.readdirSync(__dirname));
// let string = '<p><img src="http://cdn.seezt.cc/uploadimages/201812/TYPEm4eGI6DQT4vSVvSlzbBUV.jpg" style="width: 100%;" data-filename="" width="100%"><img src="https://cdn.seezt.cc/uploadimages/201812/T6F9b5Rh2Q3tXco26G6oDO5qL.jpg" style="width: 100%;" data-filename="" width="100%"><br></p';
// let result = string.replace(/(http|https):\/\/(.*?)\/(.*?)\//mg,'http://cdn.inok.com/uploadimages/');
// console.log(result);
// function f(){
//     return 123;
// }
// console.log(eval('f()'));

// let test = {
//     4:1,
//     5:2,
//     6:3
// };
// console.log(test[1]);

// let i = 0;
// if(true){
//     process.nextTick(function() {
//         console.log(1);
//     });
//     console.log(123)
// }
//
// process.nextTick(function() {
//     console.log(2);
// });
//
// console.log(3);
// console.log(4);
// console.log(5);

// function a(b) {
//     console.log(b);
// }
// let arr = [1,2,3,4,5];
// arr.forEach(a);

// const fs = require('fs');
// const tesseract = require('tesseract.js');
// tesseract.recognize(fs.readFileSync('./test2.png'), {psm:8}).then(result=>{
//     // console.log(result);
//     console.log(1234156789);
// });
// process.stdout.write('123');
// process.stdout = '234';
//
// const request = require('request');
// const fs = require('fs');
// // let urlimage = 'https://image-static.segmentfault.com/395/638/395638311-5922fe89efa7b';
// let homeurl = 'https://eservice.7-11.com.tw/e-tracking/search.aspx';
// let url = 'https://eservice.7-11.com.tw/e-tracking/ValidateImage.aspx';
// request({
//     url: homeurl,
//     method: 'GET',
//     headers:{
//         'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
//     }
// },function (err, result, a) {
//     console.log(result.headers['set-cookie'].join(';'));
//     request({
//         url:url,
//         methods:'GET',
//         headers:{
//             'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
//             Cookie: result.headers['set-cookie']
//         }
//     },function (err, result, a) {
//         // console.log(a);
//         // fs.writeFileSync('123.jpg', result.body);
//         // console.log(result.body);
//         console.log(54456);
//         console.log(123);
//         fs.createReadStream('./123.jpg').pipe(fs.createWriteStream('./234.jpg'));
//     }).pipe(fs.createWriteStream('./123.jpg'));
//
// });
// const model = require('../model');
// (async function () {
// let query = await model.Shop.findAll();
// await model.Shop.create({
//     name:'测试',
//     price: 12,
//     detail_imgs:'123.jpg;'
// });
// let update = await model.Shop.update({
//     name:'测试',
//     price: 12,
//     detail_imgs:'666.jpg;'
// },{
//     where:{id:20}
// });
// let data = await model.Shop.findOne({
//     where:{
//         id:20
//     }
// });
// console.log(update);
// console.log(data);
// console.log(data.dataValues);
// console.log(data.updatedAt);
// console.log(new Date(data.updatedAt).toLocaleString());
// })();

// let a = [1,2,3,4];
// console.log(4 in a);

// let a = [1,2,3,4,5,6];
// a = a.slice(1);
// console.log(a);

// let data = [
//     {id: 1, name: '五菱宏光', ctime: new Date()},
//     {id: 2, name: '奔驰', ctime: new Date()},
//     {id: 3, name: '奔驰1', ctime: new Date()},
//     {id: 4, name: '奔驰2', ctime: new Date()},
//     {id: 5, name: '奔驰3', ctime: new Date()},
//     {id: 6, name: '奔驰4', ctime: new Date()},
//     {id: 7, name: '奔驰5', ctime: new Date()}
// ];
//
//
// data.some((a,b)=>{
//     if(a.id===5){
//         data.splice(b,1);
//         return true;
//     }
// });
// console.log(data);

// let obj = {
//     a:1,
//     b:'1231546',
//     c:{
//         d:3,
//         e:[1,2,3,4,5]
//     }
// };

// console.log(JSON.stringify(obj,null,2)); //第二个参数可以为一个过滤函数 第三个便于打印浏览 增加缩进 为数字时 缩进2个字符

// let b = undefined;
// let a = 1 && null && console.log(123);
// console.log(a);

// console.log(new Date().toLocaleString());

// let str= '123   sending';
// console.log(str.split('\\t'));


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

// try{
//     for(;;){
//         try{
//             console.log(123345);
//             throw '出错了';
//         }catch (e) {
//             console.log(1111);
//             console.log(e+222);
//             throw e;
//         }
//     }
// }catch(err){
//     console.log(2222);
//     console.log(err+333);
// }

// let test = {list:[{goods_id: 3025, sku: 99999},
//     {goods_id: 3026, sku: 3001},
//     {goods_id: 3029, sku: 6004},
//     {goods_id: 3025, sku: 30551},
//     {goods_id: 3026, sku: 30521}]};
// console.log(JSON.stringify(test));

// let a = {
//     b:123
// }
// console.log(JSON.stringify(a));

// let adhl = '/123';
// if(adhl[0] === '/'){
//     adhl = adhl.replace('/', '*');
//     console.log(adhl);
// }else if(adhl[0] === '*'){
//     adhl.replace('*', '/')
// }
// // console.log(adhl);

// console.log(decodeURI('%E4%BC%A4%E5%BF%83%E5%B0%8F%E8%99%8E%E7%89%99'));
// const request = require('request')
// let url = "http://localhost:3000/add"
// request({
//     url: url,
//     method: 'POST',
//     headers: {
//         "content-type": "application/json",
//         "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0",
//         "Host": "bt.seezt.top:36677"
//     },
//     // json:true,
//     body: JSON.stringify({
//         action:'getData',
//         name:123,
//         list:456,
//         table:'sites',
//         limit:15,
//         request_time : '1560598369839',
//         request_token: 'b85a9c83effb2e57b917184195b8ebea',
//
//     })
// }, function (error, response, body) {
//     console.log(response.statusCode);
//     if (!error && response.statusCode == 200) {
//         console.log(body) // 请求成功的处理逻辑
//     }else{
//         // console.log(response);
//         console.log(body);
//     }
// });

// let toolkit = require('../help/toolkit')
// let oriurl = 'https://ipnpb.paypal.com/cgi-bin/webscr?cmd=_notify-validate';
// let query = { mc_gross: '56',
//     invoice: '1561104626031',
//     protection_eligibility: 'Ineligible',
//     payer_id: '8A4432NWEHQ4Y',
//     payment_date: '01:11:43 Jun 21, 2019 PDT',
//     payment_status: 'Completed',
//     charset: 'gb2312',
//     first_name: 'JIAYI',
//     mc_fee: '12',
//     notify_version: '3.9',
//     custom: '',
//     payer_status: 'unverified',
//     business: 'vipdiscountstores@gmail.com',
//     quantity: '1',
//     verify_sign: 'AipzpiML256w9-akHONKruBmK6ovAS1xepOnyHIyfjv2P94BbaewGvQ1',
//     payer_email: '25384072@QQ.COM',
//     txn_id: '3A033480JB004454A',
//     payment_type: 'instant',
//     last_name: 'GUO',
//     receiver_email: 'vipdiscountstores@gmail.com',
//     payment_fee: '',
//     shipping_discount: '0',
//     receiver_id: 'L8NNXZ4YBAGF8',
//     insurance_amount: '0',
//     txn_type: 'web_accept',
//     item_name: '����cec����2019�¿��ļ��������ǰ��ӡ������',
//     discount: '0',
//     mc_currency: 'TWD',
//     item_number: '',
//     residence_country: 'PH',
//     shipping_method: 'Default',
//     transaction_subject: '',
//     payment_gross: '',
//     ipn_track_id: '769e614261c54' }
//
//
// let url = toolkit.join_url(oriurl, query);
// const request = require('request')
// request.get(encodeURI(url), (err, res) => {
//     console.log(res.body);
// })
//
//
// console.log(url);

// let obj = {
//     a: 1,
//     b: {
//         asd: 2,
//         d: 3
//     },
//     c: 234
// };
// let {
//     a,
//     b: {asd},
//     c = 123
// }
//     = obj;
// console.log(a);
// console.log(c);
// console.log(asd);
// console.log({...obj});
//
// let str = '/3.14159'
// let [opt, ...num] = str;
// console.log(opt);
// console.log(Number(num.join('')));

// const os=require('os');
// let arr = [1,2,3,4];
// arr.unshift(arr[arr.length-1]);
// arr.pop();
// console.log(arr);
// console.log(process);
// console.log(os.cpus());
// let obj = {
//     node_version: process.version,
//     pid: process.pid,
//     ppid: process.ppid,
//     title: process.title,
//     debugPort: process.debugPort,
//     execPath: process.execPath,
//     paths: process.mainModule.filename,
//     cpus:os.cpus()[0],
//     totalmem:os.totalmem(),
//     freemem:os.freemem(),
//     usemem:process.memoryUsage(),
//     arch:os.arch(),
//     type:os.type(),
//     uptime:process.uptime()
// }
// console.log(obj);

// let str = '1232345345';
// str = str.substring(1);
// console.log(str);
// Array.

// let date = '3601.95';
// function formdate(restDate, dateString=''){
//     if(restDate===0) return dateString;
//     let tem = 1;
//     if (restDate < tem*60) return formdate(restDate%tem, `${dateString}${~~restDate}s`); tem*=60;
//     if (restDate < tem*60) return formdate(restDate%tem, `${dateString}${~~(restDate/tem)}m`); tem*=60;
//     if (restDate < tem*24) return formdate(restDate%tem, `${dateString}${~~(restDate/tem)}h`); tem*=24;
//     return formdate(~~(restDate%tem), `${dateString}${~~(restDate/tem)}d`);
// };
// console.log(formdate(~~date));

// require('../lib/Date')
// let time = new Date('2019-06-24T01:45:50.000Z')
// console.log(time.NatureTime())

// let arr = [1,2,3,4,1,2,6,5,6,7,8]
// let self = [...arr]
// let result = arr.filter((item,index) => {
//   let left = self.slice(0,index)
//   if(left.includes(item)) return false
//   return true
// })
// console.log(result)
// let arr = [{a:1,c:3},{b:2},{b:2},{b:2,c:2}]
// console.log([...new Set(arr)])

// function getExcelIndex (n) {
//   const ordA = 'A'.charCodeAt(0)
//   const ordZ = 'Z'.charCodeAt(0)
//   const len = ordZ - ordA + 1
//   let s = ''
//   while (n >= 0) {
//     s = String.fromCharCode(n % len + ordA) + s
//     n = Math.floor(n / len) - 1
//   }
//   return s
// }
//
// console.log(getExcelIndex(0))

// console.log(new Date('2019/5/19 18:38:47'))
// console.log([...[],123])
// let a = {}
// console.log(a.b === undefined)

// console.group("第一组信息");
//
// console.log("第一组第一条");
//
// console.log("第一组第二条");
//
// console.groupEnd();
//
// console.group("第二组信息");
//
// console.log("第二组第一条");
//
// console.log("第二组第二条");
//
// console.groupEnd();

// let a = () => {
//     console.log('call fun')
//     return {c: 123}
// };
// let b = a;
// console.log(b);

// const list = [123];
// for(let item of list) {
//     console.log(list);
// }
// console.log(list);

// function  fun (a, {
//     basis = 'fullPath',
//     user = false
// } = {
//     basis: 234,
//     b: 111
// }) {
//     console.log(a, b,  basis, user)
// }
// fun(12);
// my test
// const path = require('path');
// (async () => {
//     // const string = '<p><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422821682446336.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422827520917504.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422833019650048.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422838430302208.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422845254434816.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422851709468672.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422856096710656.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422862769848320.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422873842810880.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422879568035840.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422885461032960.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422892377440256.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422898593398784.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422903811112960.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422909859299328.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422914749857792.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422922073112576.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422930092621824.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422938502201344.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422944579747840.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422950531465216.jpg"><img src="https://img01-gms.17zwd.com/imgextra/61695748/i2/613422955665293312.jpg"></p>';
//     // const result = await handleContent(string);
//
//     const specs = [
//         {
//             price: 100,
//             img: 'https://img01-gms.17zwd.com/imgextra/61695748/i2/613422827520917504.jpg',
//             name: '白',
//             option1: '大'
//         },
//         {
//             price: 200,
//             img: 'https://img01-gms.17zwd.com/imgextra/61695748/i2/613422838430302208.jpg',
//             name: '黑',
//             option1: '小'
//         }
//     ];
//     const result = await handleSpecs(specs);
//     console.log('save spec', result);
// })();
//
// async function handleSpecs (specs) {
//     const d = new Date();
//     const year = d.getFullYear();
//     const month = d.getMonth() + 1;
//     const domainName = 'http://cdn.seezt.cc/uploadimages/';
//
//     let uploadList = {};
//     let temUploadUrl = '';
//     let saveSpecs = [];
//
//     saveSpecs = specs.map(item => {
//         temUploadUrl = year + '' + month + '/' + path.basename(item.img).replace(/_.*\./,'.');
//         uploadList[item.img] = temUploadUrl;
//         item.img = domainName + temUploadUrl;
//         return item;
//     });
//
//     // let uploadinfo = await uploadstream.upload(Object.entries(uploadList));
//     // if(uploadinfo.Error) return uploadinfo;
//
//     console.log('upload specs', uploadList);
//     return saveSpecs;
// }
//
// async function handleContent (content) {
//     const d = new Date();
//     const year = d.getFullYear();
//     const month = d.getMonth() + 1;
//     const domainName = 'http://cdn.seezt.cc/uploadimages/';
//
//     const re = /img src="(.*?)">/mg;
//
//     let contentCopy = content;
//     let res = null;
//     let temUploadUrl = '', uploadList = {};
//
//     do {
//         if(res && res[1]) {
//             temUploadUrl = year + '' + month + '/' + path.basename(res[1]).replace(/_.*\./,'.');
//             uploadList[res[1]] = temUploadUrl;
//             contentCopy = contentCopy.replace(res[1], domainName + temUploadUrl)
//         }
//         res = re.exec(content);
//     }while(res);
//     // let uploadinfo = await uploadstream.upload(Object.entries(uploadList));
//     console.log('upload content', uploadList);
//     return contentCopy;
// }

// let array = ['武汉', '北京', '上海', '天津'];
// let list = [
//     {
//         src: '武汉'
//     },
//     {
//         src: '北京'
//     },
//     {
//         src: '上海'
//     },
//     {
//         src: '天津'
//     },
// ];
// let resultArray = list.sort((a, b) => {
//         // console.log(param1.localeCompare(param2, "zh"));
//         // return param1.localeCompare(param2,"zh");
//     return a.src.localeCompare(b.src, 'zh')
//     }
// );
// console.log(resultArray);
// console.log(resultArray);
// const request = require('request');
// const fs = require('fs');
// const url='http://ting666.yymp3.com:86/new25/wangjianfang2/4.mp3';
// request(url).pipe(fs.createWriteStream('./在人间.mp3'));

// let re = /(.*?[市縣])(.*?[區市鎮鄉])(.*)/g;
// let str = '雲林縣水林鄉新興南路４號，６號';
// console.log(re.exec(str));
// const pinyin = require('pinyinlite');
// let a = ['大', '我', '你', '我', '你', '换个', '大'];
// let b = a.sort( function compareFunction(param1, param2) {
//    console.log(param1.localeCompare(param2, "zh"));
//         return param1.localeCompare(param2,"zh");
//     });
// console.log(b);

// const tookit = require('../help/toolkit');
// const path = require('path');
// let jsonData = require('./TH.json');
// let basicData = [
//     {
//         name: 'basic',
//         data: [['省', '市', '区', '邮编', '邮费']]
//     }
// ];
// let shopData = [
//     {
//         name: '711店铺',
//         data: [['店号', '街道', '店名', '地址']]
//     },
//     {
//         name: '全家店铺',
//         data: [['店号', '街道', '店名', '地址']]
//     }
// ];
// let shopInfo = [];
// jsonData.forEach(a => {
//     a.area.forEach(b => {
//         // basicData[0].data.push(['台湾省', a.city, b.area, '', b.frieight]);
//         b.postcode.forEach(c => {
//             basicData[0].data.push(['', a.city, b.area, c.postcode, c.frieight]);
//
//             // shopInfo = c.postcode.split('-');
//             // shopData[c.type - 1].data.push([shopInfo[1], c.road, shopInfo[0], `${a.city}${b.area}${shopInfo[2]}`]);
//         });
//     });
// });
// tookit.build_xlsx(basicData, path.resolve('basic.xlsx'));
// tookit.build_xlsx(shopData, path.resolve('shop.xlsx'));


// const toolkit = require('../help/toolkit');
// const path = require('path');
// let data = toolkit.parse_xlsx(path.resolve('test.xlsx'));
// console.log(data);

// let a = [1,2];
// console.log(a[2]);

// const re = /(https?:\/\/.*?\/)(.*)/g;
// const src = 'http://cdn.seezt.cc/uploadimages/';
// let res = re.exec(src);
// console.log(res);


// function f1(a) {
//     console.log(a);
//     console.log(a);
// }
//
// let fun = eval('f1');
// console.log(fun);
// new fun(123);

// require('../lib/Date');
// console.log(new Date().Format('yyyyMMddHHmmss'));


// let a = {
//     a: 1,
//     b: 2,
//     c: undefined
// };
// console.log(a);


// let a = [
//     {a:2, b:3},
//     {a:2, b:2},
//     {a:1, b:3},
//     {a:3, b:1},
//     {a:1, b:2}
// ];
// a = a.sort((a, b) => {
//     return a.a - b.a;
// });
// console.log(a);


// const crypto = require('crypto');
// const buf = crypto.randomBytes(18);
// console.log(`${buf.length} 位的随机数据: ${buf.toString('hex')}`);

// console.log(new Date().getTime());


// let data = [];
// let count = 0;
// let list;
//
// while (count < 1000) {
//     data.push(count);
//     ++count;
// }

// list = [];
// console.time('for of');
// for(let item of data) {
//     list.push(item);
// }
// console.log(list.length);
// console.timeEnd('for of');


// list = [];
// let length = data.length;
// console.time('for');
// for(let i = 0; i < length; i++) {
//     list.push(data[i])
// }
// console.log(list.length);
// console.timeEnd('for');
//
//
//
//
// list = [];
// console.time('forEach');
// data.forEach(item => {
//     list.push(item);
// });
// console.log(list.length);
// console.timeEnd('forEach');

// (async () => {
// //     let a = 0;
// //     let b = 0;
// //     let c = 0;
// //     console.time('total');
// //     let fun_a = function () {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(3);
// //                 // console.log(3);
// //             }, 2000);
// //         });
// //     };
// //
// //     let fun_b = function () {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(4);
// //                 // console.log(4);
// //             }, 3000);
// //         });
// //     };
// //
// //     let fun_c = function () {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(5);
// //                 // console.log(5);
// //             }, 4000);
// //         });
// //     };
// //     let result = await Promise.race([fun_b(), fun_a(),  fun_c()]);
// //     console.log('result', result);
// //     console.timeEnd('total');
// //     console.log(a, b, c);
// // })();
// let a = [1, 2, 3, 4, 5];
// for (let item of a) {
//     if (item < 3) continue;
//     console.log(item);
// }

// const request = require('request');
// const toolkit = require('../help/toolkit');
// let url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=global%20cache&oq=moment%2520%25E6%2597%25A5%25E6%259C%259F%25E7%259B%25B8%25E5%2587%258F&rsv_pq=e45f64dc000e8699&rsv_t=13f544UJD%2FKZguhHV2XRSRMLC3RfwYfwafIkg76oAI624hEjKU%2BpyY4udjQ&rqlang=cn&rsv_enter=1&rsv_dl=tb&inputT=6107&rsv_sug3=50&rsv_sug1=24&rsv_sug7=100&rsv_sug2=0&rsv_sug4=532056';
// let header = {
//     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
// };
// toolkit.get_header(url, header).then(res => {
//     console.log(res.body);
// });

// let funlist = {
//     a: function () {
//         console.log('a');
//     },
//     b: function () {
//         console.log('b');
//     },
//     c: function () {
//         console.log('c');
//     }
// };
//
// for(let fun of Object.values(funlist)) {
//     fun();
// }

// const crypto = require("crypto");
// const AppKey = '203746741';
// const AppSecret = 'arta03li73u1g1mls9p71bz7h7jxivoy';
// const request = require('request');
// const util = require('util');
// const get = util.promisify(request);
// //
// (async () => {
//     function getALYSignature() {
//         // let StringToSign = 'GET' + '\n' + 'application/json' + '\n' + '\n' + '\n' + '\n' + '/RTBAsia/iptype?ip=' + ip;
//         let StringToSign = 'GET' + '\n' + 'application/json' + '\n' + '\n' + '\n' + '\n' + '/ip?ip=' + ip;
//         // let StringToSign = 'GET' + '\n' + 'application/json' + '\n' + '\n' + '\n' + '\n' + '\n';
//         let tem = crypto
//             .createHmac('sha256', AppSecret) //你的secret
//             .update(StringToSign)
//             .digest()
//             .toString('base64');
//         console.log('sign', tem);
//         return tem;
//     }
//
//     let ip = '113.139.212.63';
//
//     // let url = 'http://aliyun.api.caacbook.com.cn/RTBAsia/iptype?ip=' + ip;
//     // let url = 'http://aliyun.api.caacbook.com.cn/RTBAsia/nht?ip=' + ip;
//     // let url = 'http://aliyun.api.caacbook.com.cn/RTBAsia/dictionary_district';
//     // let url = 'http://aliyun.api.caacbook.com.cn/RTBAsia/ip_district?ip=' + ip;
//     let url = 'http://api01.aliyun.venuscn.com/ip?ip=' + ip;
//     let header = {
//         'Accept': 'application/json',
//         'X-Ca-Key': AppKey,
//         'X-Ca-Signature': getALYSignature()
//     };
//
//     let res = await get({
//         url: url,
//         method: 'GET',
//         headers: header
//     });
//     console.log(res);
// })();

// console.log(JSON.parse('{"code":200,"data":{"type":"3"},"ip":"113.139.212.63","msg":"Success"}'));

// console.log(1e10);

// console.log(require('os').cpus())

// let str = 'http://aliyun.api.caacbook.com.cn';
// let rex = /^https?:/;
// console.log(rex.test(str));

// let ip = '123.124.53.3';
// let ip_regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
// console.log(ip_regex.test(ip));

// let a = 1;
// try {
//     a = 2;
//     throw '抛出错误';
//     a = 3;
// } catch (error) {
//     console.error('错误', a,  error);
//     a = 4;
// }
// console.log(a);

// let orstr = 'server%0A%7B%0A++++listen+80%3B%0A++++server_name+xpp.com+test.com%3B%0A++++index+index.php+index.html+index.htm+default.php+default.htm+default.html%3B%0A++++root+%2Fwww%2Fwwwroot%2Fxpp.com%3B%0A++++%0A++++%23SSL-START+SSL%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE%EF%BC%8C%E8%AF%B7%E5%8B%BF%E5%88%A0%E9%99%A4%E6%88%96%E4%BF%AE%E6%94%B9%E4%B8%8B%E4%B8%80%E8%A1%8C%E5%B8%A6%E6%B3%A8%E9%87%8A%E7%9A%84404%E8%A7%84%E5%88%99%0A++++%23error_page+404%2F404.html%3B%0A++++%23SSL-END%0A++++%0A++++%23ERROR-PAGE-START++%E9%94%99%E8%AF%AF%E9%A1%B5%E9%85%8D%E7%BD%AE%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%B3%A8%E9%87%8A%E3%80%81%E5%88%A0%E9%99%A4%E6%88%96%E4%BF%AE%E6%94%B9%0A++++%23error_page+404+%2F404.html%3B%0A++++%23error_page+502+%2F502.html%3B%0A++++%23ERROR-PAGE-END%0A++++%0A++++%23PHP-INFO-START++PHP%E5%BC%95%E7%94%A8%E9%85%8D%E7%BD%AE%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%B3%A8%E9%87%8A%E6%88%96%E4%BF%AE%E6%94%B9%0A++++include+enable-php-00.conf%3B%0A++++%23PHP-INFO-END%0A++++%0A++++%23REWRITE-START+URL%E9%87%8D%E5%86%99%E8%A7%84%E5%88%99%E5%BC%95%E7%94%A8%2C%E4%BF%AE%E6%94%B9%E5%90%8E%E5%B0%86%E5%AF%BC%E8%87%B4%E9%9D%A2%E6%9D%BF%E8%AE%BE%E7%BD%AE%E7%9A%84%E4%BC%AA%E9%9D%99%E6%80%81%E8%A7%84%E5%88%99%E5%A4%B1%E6%95%88%0A++++include+%2Fwww%2Fserver%2Fpanel%2Fvhost%2Frewrite%2Fxpp.com.conf%3B%0A++++%23REWRITE-END%0A++++%0A++++%23%E7%A6%81%E6%AD%A2%E8%AE%BF%E9%97%AE%E7%9A%84%E6%96%87%E4%BB%B6%E6%88%96%E7%9B%AE%E5%BD%95%0A++++location+~+%5E%2F(%5C.user.ini%7C%5C.htaccess%7C%5C.git%7C%5C.svn%7C%5C.project%7CLICENSE%7CREADME.md)%0A++++%7B%0A++++++++return+404%3B%0A++++%7D%0A++++%0A++++%23%E4%B8%80%E9%94%AE%E7%94%B3%E8%AF%B7SSL%E8%AF%81%E4%B9%A6%E9%AA%8C%E8%AF%81%E7%9B%AE%E5%BD%95%E7%9B%B8%E5%85%B3%E8%AE%BE%E7%BD%AE%0A++++location+~+%5C.well-known%7B%0A++++++++allow+all%3B%0A++++%7D%0A++++%0A++++location+~+.*%5C.(gif%7Cjpg%7Cjpeg%7Cpng%7Cbmp%7Cswf)%24%0A++++%7B%0A++++++++expires++++++30d%3B%0A++++++++error_log+off%3B%0A++++++++access_log+%2Fdev%2Fnull%3B%0A++++%7D%0A++++%0A++++location+~+.*%5C.(js%7Ccss)%3F%24%0A++++%7B%0A++++++++expires++++++12h%3B%0A++++++++error_log+off%3B%0A++++++++access_log+%2Fdev%2Fnull%3B+%0A++++%7D%0A++++access_log++%2Fwww%2Fwwwlogs%2Fxpp.com.log%3B%0A++++error_log++%2Fwww%2Fwwwlogs%2Fxpp.com.error.log%3B%0A%7D';
// console.log(decodeURIComponent(orstr).replace(/\+/g, ' ').replace(/%23/g, '#').replace(/%3B/g, ';'));
// const toolkit = require('../help/toolkit');
// (async () => {
//     try {
//         let data = await getData();
//         console.log(data);
//     } catch (error) {
//         console.log('2', error);
//     }
// })();
//
// async function getData() {
//     try {
//         let res = await toolkit.get('http://localhost:8989/test');
//         console.log(res);
//
//     } catch (error) {
//         console.log('1', error);
//     }
//     return 'empty data';
// }

// let b = 3;
// let a = {
//   b: 2,
//   print: function () {
//       let b = 5;
//       console.log(this.b);
//   }
// };
// a.print();

// let a = 'server\n' +
//     '{\n' +
//     '    listen 80;\n' +
//     '    server_name abc.com;\n' +
//     '    index index.php index.html index.htm default.php default.htm default.html;\n' +
//     '    root /www/wwwroot/abc.com;\n' +
//     '    \n' +
//     '    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则\n' +
//     '    #error_page 404/404.html;\n' +
//     '    #SSL-END\n' +
//     '    \n' +
//     '    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改\n' +
//     '    #error_page 404 /404.html;\n' +
//     '    #error_page 502 /502.html;\n' +
//     '    #ERROR-PAGE-END\n' +
//     '    \n' +
//     '    #PHP-INFO-START  PHP引用配置，可以注释或修改\n' +
//     '    include enable-php-00.conf;\n' +
//     '    #PHP-INFO-END\n' +
//     '    \n' +
//     '    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效\n' +
//     '    include /www/server/panel/vhost/rewrite/abc.com.conf;\n' +
//     '    #REWRITE-END\n' +
//     '    \n' +
//     '    #禁止访问的文件或目录\n' +
//     '    location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)\n' +
//     '    {\n' +
//     '        return 404;\n' +
//     '    }\n' +
//     '    \n' +
//     '    #一键申请SSL证书验证目录相关设置\n' +
//     '    location ~ \\.well-known{\n' +
//     '        allow all;\n' +
//     '    }\n' +
//     '    \n' +
//     '    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$\n' +
//     '    {\n' +
//     '        expires      30d;\n' +
//     '        error_log off;\n' +
//     '        access_log /dev/null;\n' +
//     '    }\n' +
//     '    \n' +
//     '    location ~ .*\\.(js|css)?$\n' +
//     '    {\n' +
//     '        expires      12h;\n' +
//     '        error_log off;\n' +
//     '        access_log /dev/null; \n' +
//     '    }\n' +
//     '    access_log  /www/wwwlogs/abc.com.log;\n' +
//     '    error_log  /www/wwwlogs/abc.com.error.log;\n' +
//     '}';
//
// let b = '\n' +
//     '    location /\n' +
//     '    {\n' +
//     '   \t \tproxy_pass http://127.0.0.1:8087;\n' +
//     '        proxy_set_header Host $host;\n' +
//     '        proxy_set_header X-Real-IP $remote_addr;\n' +
//     '        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n' +
//     '        proxy_set_header REMOTE-HOST $remote_addr;\n' +
//     '    }\n' +
//     '    \n' +
//     '    location /theme\n' +
//     '    {\n' +
//     '    \talias /www/wwwroot/单页商城/theme;\n' +
//     '    }\n' +
//     '    \n' +
//     '    location /api\n' +
//     '    {\n' +
//     '        proxy_pass http://127.0.0.1:8088;\n' +
//     '        proxy_set_header Host $host;\n' +
//     '        proxy_set_header X-Real-IP $remote_addr;\n' +
//     '        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n' +
//     '        proxy_set_header REMOTE-HOST $remote_addr;\n' +
//     '    }';
// let regx = /\s(root.*?;)/g;
// let text = regx.exec(a);
// let c = null;
// if (text && text[1]) c = a.replace(text[1], text[1] + b);
// console.log(c);


// function a() {
//     return new Promise((resolve, reject) => {
//         try {
//             // throw new Error('又出错了');
//             let a= 2/0;
//             console.log(b);
//             // reject('出错了');
//             resolve(2);
//         } catch (err) {
//             console.log('内部捕捉', err);
//         }
//         return 333;
//     })
// }
// (async () => {
//     try {
//         let data = await a();
//         console.log(data);
//         console.log('222');
//     } catch(error) {
//         console.log('external', error);
//     }
// })();

// let toolkit = require('../help/toolkit');
// toolkit.get_header('http://127.0.0.1:8989/get_header', {name: 'andy'}).then((err, data) => {
//     console.log(err);
// });

console.log(1);
f().then(num => {
    console.log(num);
});
setTimeout(() => {
    console.log(2);
}, 10);
setTimeout(() => {
    console.log(3);
}, 1000);
console.log(4);

async function f() {
    return 5;
}
