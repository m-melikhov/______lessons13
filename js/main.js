var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name'
};

var decimal2 = myNum.toFixed(2);

var i = 5;

console.log(++i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i--);

var myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= 10;
console.log(myTest);

myTest *= 2;
console.log(myTest);

myTest /= myNum;
console.log(myTest);

myTest %= 3;
console.log(myTest);
