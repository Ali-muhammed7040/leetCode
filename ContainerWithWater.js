let container = [1, 8, 6, 2, 5, 4, 8, 3, 7]

let maxWater = 0
for (let i = 0; i < container.length; i++) {
    for (let j = i + 1; j < container.length; j++) {
        let width = j - i; 
        let minHeight = Math.min(container[i], container[j])
        let currentWater = minHeight * width
        maxWater = Math.max(currentWater, maxWater)
    }
}

console.log(maxWater, 'maxWater')