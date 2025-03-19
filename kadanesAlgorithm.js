// kadane's algorithm

let array = [3, -4, 5, 4, -1, 7, -8]

let maxSum = 0;
let currentSum = 0

for (let i = 0; i < array.length; i++) {
    currentSum += array[i]
    if (currentSum > maxSum) {
        maxSum = currentSum
    }
    if (currentSum < 0) {
        currentSum = 0
    }
}

console.log(maxSum, 'MAX')