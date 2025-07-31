const numbers = [1, 2, 3, 4, -1, -5, -6, -9, -10, 5, 6, 7]
let num = 0;

for(let i = 0; i < numbers.length; i++){
    if((numbers[i]%2) === 0){
        console.log(numbers[i])
    }else{
        console.log(String(numbers[i]), "impar")
    }
}