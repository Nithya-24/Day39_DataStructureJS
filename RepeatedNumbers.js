let arr = [];

for (var i = 11; i <= 100; i++) {
    var splitnum = i % 10;
    var num = i / 10;
    // console.log(num);
    if (splitnum == parseInt(num)) {
        arr.push(i);
    }
}
console.log("Repeated Numbers are: " + arr);