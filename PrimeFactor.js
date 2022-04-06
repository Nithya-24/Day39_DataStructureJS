let arr = [];

const prompt = require("prompt-sync")();
let num = prompt("Enter a number to get the Prime Facor: ");
var flag = 0;

function primeChecker(i) {
    for (var j = 2; j <= (i / 2); j++) {
        if (i % j == 0) {
            flag++;
            break;
        }
    }
    if (flag == 0) {
        arr.push(i)
    }
}

for (var i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
        primeChecker(i);
    }
}
console.log("Prime Factors are: " + arr);
