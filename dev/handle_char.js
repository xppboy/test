let str = '🌟邱嘉源';
let ranges = [
    '\ud83c[\udf00-\udfff]',
    '\ud83d[\udc00-\ude4f]',
    '\ud83d[\ude80-\udeff]'
];
let ranges2 = [
    '[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]',
    '[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]',
    '\uFE0F\u20E3',
    '\u20E3',
    '[\u203C-\u3299]\uFE0F\u200D',
    '[\u203C-\u3299]\uFE0F',
    '[\u2122-\u2B55]',
    '\u303D',
    '\u3030',
];
str = str.replace(new RegExp(ranges.join('|'), 'ig'), '');
str = str.replace(new RegExp(ranges2.join('|'), 'ig'), '');
console.log(str);
