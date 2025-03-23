// Find best buy
// max profit return
let prices = [7, 1, 5, 3, 6, 4]

let bestBuy = prices[0]
let maxProfit = 0

for (let i = 1; i < prices.length; i++) {
    console.log(prices[i])
    if (prices[i] < bestBuy) {
        bestBuy = prices[i]
    }

    if (prices[i] - bestBuy > maxProfit) {
        maxProfit = prices[i] - bestBuy
        
    }

}

console.log(bestBuy, 'bestBuy')
console.log(maxProfit, 'maxProfit')