let numbers = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 0){
        continue;
    }else{
        numbers[i] = numbers[i] * (-1);
    }
}

console.log(numbers)