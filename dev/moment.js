const moment = require('moment');

let time = moment().format();
console.log(time);

time = new Date(time).toLocaleString();
console.log(time);

// console.log(moment());
// console.log(moment(new Date()));
// console.log(moment("1995-12-25"));
// 取当天时间，以YYYY年MM月DD日形式显示
console.log(moment().format("YYYY年MM月DD日 HH时mm分ss秒"));
console.log(moment().format("YYYY年MM月DD日 hh时mm分ss秒"));
// 任意时间戳格式化，以YYYY-MM-DD HH:mm:ss形式显示
console.log(moment(1411641720000).format('YYYY-MM-DD HH:mm:ss'));
// 获取前一天日期，格式以YYYY-MM-DD形式显示
console.log(moment().day(0).format('YYYY-MM-DD'));
console.log(moment().day(1).format('YYYY-MM-DD'));
console.log(moment().day(-1).format('YYYY-MM-DD'));
console.log(moment().day(5).format('YYYY-MM-DD'));
// 获取本周五日期，格式以YYYY-MM-DD形式显示
console.log(moment().weekday(5).format('YYYY-MM-DD'));
console.log(moment().weekday(-3).format('YYYY-MM-DD'));
console.log(moment().weekday(1).format('YYYY-MM-DD'));
// 获取上周五日期，格式以YYYY-MM-DD形式显示
// 可以简单理解为上周倒数第几天，上周倒数第三天就是上周五了，和当天日期无关
console.log(moment().weekday(-5).format('YYYY-MM-DD'));

console.log(moment().year());
console.log(moment().month() + 1);
console.log(moment().date());

// 获取上个月今天的日期，格式以YYYY-MM-DD显示
console.log(moment().subtract(1, 'months').format('YYYY-MM-DD'));
// 获取前一天日期，格式以YYYY-MM-DD显示
console.log(moment().subtract(1, 'days').format('YYYY-MM-DD'));
// 获取去年今天的日期，格式以YYYY-MM-DD显示，即简便的获取去年今天日期的方法
console.log(moment().subtract(1, 'year').format('YYYY-MM-DD'));
/// 获取两个小时之后的时间
console.log(moment().add(2, 'hours').format('YYYY-MM-DD HH:mm:ss'));
// 获取五天前的日期
console.log(moment().subtract(5, 'days').format('YYYY-MM-DD'));
//
console.log(moment().subtract(5, 'days').daysInMonth());

console.log(moment().endOf('month').format('YYYY/MM/DD'));
console.log(moment().endOf('day').format('YYYY/MM/DD'));

// 减法
console.log(moment("2019-02-01 18:01:01").diff(moment("2019-03-01"), 'second'));


