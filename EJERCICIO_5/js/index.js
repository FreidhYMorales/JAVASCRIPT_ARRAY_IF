const numbers = [1, 2, 3, 4, -1, -5, -6, -9, -10, 5, 6, 7];
let num = [];
console.log(numbers)

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 0){
        num.push(numbers[i]);
    }
}

console.log(num)