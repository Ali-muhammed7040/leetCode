//Number to Binary
function numberToBinary(number) {
    let binary = ""

    while (number > 0) {
        remainder = number % 2;
        number = Math.floor(number / 2);

        binary = remainder + binary

    }
    return binary
}

let num = 56;
let binary = numberToBinary(num)
console.log('binary : ', binary)



function binaryToDecimal(num) {
    let pow = 1;
    let output = 0;

    while (num > 0) {
        let digit = num % 10;
        output = output + digit * pow
        num = Math.floor(num / 10)
        pow = pow * 2
    }
    return output
}

let decimal = binaryToDecimal(111000)
console.log('decimal : ', decimal)