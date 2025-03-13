// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

let x = 121

let original = x;
let reversed = 0;
while (x > 0) {
    let digit = x % 10
    reversed = reversed * 10 + digit
    x = Math.floor(x/10)
    console.log('digit', digit)
    console.log('reversed', reversed)
}

if(reversed === original){
    console.log('palindrome')
}
