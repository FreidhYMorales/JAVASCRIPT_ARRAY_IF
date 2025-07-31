const numbers = [1, 2, 3, 4, -1, -5, -6, -9, -10, 5, 6, 7]
let num = 0

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        num++;
    }
}

console.log(num)