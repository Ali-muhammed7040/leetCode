const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const romanToInt = function(str) {
    let result= 0;
    for (let i = str.length-1; i>= 0; i--) {
        
        if(romanNumerals[str[i]]< romanNumerals[str[i+1]]){
            result -=  romanNumerals[str[i]]
        }else{
            result +=  romanNumerals[str[i]]
        }        
    }
    return result
  };

  let output1 = romanToInt("MCMXCIV")
  let output2 = romanToInt("LVIII")
  let output3 = romanToInt("III")

  console.log(output1,'output1')
  console.log(output2,'output2')
  console.log(output3,'output3')