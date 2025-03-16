// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


strs = ["flower", "flow", "flight"]

let result = ""

for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
        if(ch === strs[j][i]){
            console.log(ch)
        }
    }
}
console.log(result,'result')