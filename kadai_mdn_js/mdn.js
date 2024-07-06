const time = new Date;
const date =time.getDate();
const month =time.getMonth()+1;//数え方が0-11のため+1する。
const year =time.getFullYear();
console.log(year+'年'+month+'月'+date+'日');


