let array = [12, 234, 46, 234, 16, 36, 12, 46, 16];
let unique = 0;
for (let i = 0; i < array.length; i++) {
    unique ^= array[i];
}
console.log(unique, 'element')

// finding even using bitwise operator

function isEven(n) {
    return (n & 1) === 0
}

const even = isEven(17)
console.log(even, 'even')

let a = 5, b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, 'a')
console.log(b, 'b')

// check if a number is power of Two

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0
}

let pow = isPowerOfTwo(124)
console.log(pow, 'pow')

// how many 1s are in a binary number

function countSetBits(n) {
    let count = 0;
    while (n > 0) {
        count++
        n &= (n - 1)
    }
    return count
}
let counter = countSetBits(13)
console.log(counter, 'counter')

// find missing numbers from array

function missingNumber(array, n) {
    let xOr1, xOr2 = 0
    for (let i = 1; i <= n; i++) {
        xOr1 ^= i;

    }

    for (let i = 0; i < array.length; i++) {
        xOr2 ^= array[i];

    }

    return xOr1 ^ xOr2
}

const missed = missingNumber([1, 2, 4, 5, 6], 6)
console.log(missed, 'missed')


console.log(6 & 2,'&')
console.log(6 | 2,'|')
console.log(6 ^ 2,'^')
console.log(6 << 2,'<<')
console.log(6 >> 2,'>>')