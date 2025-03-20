// two sum pointer || scrolling window

let array = [2, 7, 11, 15]

let start = 0
let end = array.length - 1

while (start < end) {
    if (array[start] + array[end] === 9) {
        console.log('start: ', array[start], 'end :', array[end])
        return [start,end]
    }else if(array[start]+array[end]< 9){
        start++
    }else{
        end--
    }
}