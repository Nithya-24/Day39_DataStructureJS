let arr = [];

for (var i = 0; i < 10; i++) {

    arr[i] = Math.floor(Math.random() * 900) + 100;
}
console.log(arr);
arr.sort();
console.log("Sorted Array: " + arr);
console.log("2nd Maximum number: " + arr[arr.length - 2] + "\n2nd Minimum number: " + arr[1]);