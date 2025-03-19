
//max subarray

const array = [1, 2, 3, 4, 5]

let maxSum = 0;
for (let start = 0; start < array.length; start++) {
    let currentSum = 0;
    for (let end = start; end < array.length; end++) {
        currentSum += array[end]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
}

console.log(maxSum,'maxSum')

