let array = [2, 2, 1, 1, 1, 2, 2]

let freq = 0, answer = 0;

for (let i = 0; i < array.length; i++) {
    if (freq == 0) {
        answer = array[i]
    }

    if (answer == array[i]) {
        freq++
    } else {
        freq--
    }
}

console.log(answer,'answr')