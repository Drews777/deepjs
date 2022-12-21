let num = 266219;
function digitsMultip(data) {
    let result = 1;
    let word = data.toString();
    for (let i = 0; i< word.length; i++) {
        if (word[i] !=="0") result *= word[i];
    }
    return result;
}
console.log(digitsMultip(num));
let funcValue = digitsMultip(num);
console.log(funcValue**3);
let value3 = funcValue**3;
console.log(value3.toString().substr(0,2));