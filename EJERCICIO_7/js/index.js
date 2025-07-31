const strings = ["asdfgh", "asd", "afsd", "asdfgh", "asd", "afsd", "asdfgh", "asd", "afsd"];
let find = prompt("Ingresar valor a buscar!");
let finded = false;

for(let i = 0; i < strings.length; i++){
    if(strings[i] === find){
        finded = true;
    }
}

if(finded){
    console.log("Valor encontrado!")
}else{
    console.log("Valor no encontrado!")
}