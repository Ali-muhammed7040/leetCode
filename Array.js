const array = [12, 34, 45, 56, 76]

let sum = 0, product = 1
//sum of array elements
for (let i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];

}
console.log(array)
console.log(sum)
console.log(product)


//Swap max and min of an array
// Input:  [12, 45, 7, 89, 23]
// Output: [12, 45, 89, 7, 23]

let array2 = [12, 45, 7, 89, 23]

let minIndex = 0, maxIndex = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] < array2[minIndex]) minIndex = i
    if (array2[i] > array2[maxIndex]) maxIndex = i
}
[array2[minIndex], array2[maxIndex]] = [array2[maxIndex], array2[minIndex]]

console.log(array2, 'array2')


//Unique Values of an array


let array3 = [1, 2, 3, 2, 1, 4, 3];
let unique = 0
let count = {}

for (let i = 0; i < array3.length; i++) {

    count[array3[i]] = (count[array3[i]] || 0) + 1

}
unique = Object.keys(count).filter((key) => {
    return count[key] == 1
}).map(Number)

console.log(unique, 'unique')


let array4 = [1, 2, 3, 4, 5];
let array5 = [3, 4, 5, 6, 7];

let common = []

for (let i = 0; i < array4.length; i++) {
    for (let j = 0; j < array5.length; j++) {

        if (array4[i] === array5[j]) {
            common.push(array4[i])
        }
    }
}

console.log(common, 'common')