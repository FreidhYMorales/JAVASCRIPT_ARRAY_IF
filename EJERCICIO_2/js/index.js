const numbers = [1, 2, 3, 4, -1, -5, -6, -9, -10, 5, 6, 7, 100];
let num100 = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 100){
        num100++;
    }
}

if(num100 > 0){
    console.log("Si hay  un numero igual a cien!");
}else{
    console.log("No hay ningun numero igual a cien!")
}