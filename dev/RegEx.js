let regex = /\B(?=(?:\d{3})+(?!\d))/g;
let str = '123467980';
let res = str.replace(regex, ',');
console.log(res);
