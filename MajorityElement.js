// Majority Element

let array = [2, 2, 1, 1, 1, 2, 2]

for (let i = 0; i < array.length; i++) {
    let frequency = 0

    for (let j = 0; j < array.length; j++) {

        if (array[i] === array[j]) {
            frequency++
        }

    }
    if (frequency > Math.floor(array.length / 2)) {
        console.log(array[i], 'is the majority element');
        break;
    }
}



let sortArray = array.sort()

let answer = sortArray[0];
let freq = 1;

for (let i = 1; i < sortArray.length; i++) {
    if (sortArray[i] == sortArray[i - 1]) {
        freq++
    } else {
        freq = 1
        answer = sortArray[i]
    }

    if (freq > sortArray.length / 2) {
        console.log(answer,'the majority element Optimise solution') 
        break
    }

}

