let num = 426;
let sum = 0;
while (num > 0) {
    let digit = num % 10
    num = Math.floor(num / 10)
    sum += digit;
}

console.log(sum, 'sum')