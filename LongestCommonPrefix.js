// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


strs = ["flower","flow","flight"]

for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
        console.log(strs[i],strs[j])        
    }

}