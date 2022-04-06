const prompt = require('prompt-sync')();
let a = Math.floor(Math.random() * 900) + 100;
let b = Math.floor(Math.random() * 900) + 100;
let c = -(a + b);

let numberArr = new Array()

numberArr.push(a);
numberArr.push(b);
numberArr.push(c);

let total = 0;
numberArr.forEach(sum);

function sum(num) {
    total = total + num
}
console.log("Sum of " + a + " + " + b + " + (" + c + ")=  " + total);