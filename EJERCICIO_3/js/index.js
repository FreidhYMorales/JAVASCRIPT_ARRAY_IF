const strings = ["asdfgh", "asd", "afsd", "asdfgh", "asd", "afsd", "asdfgh", "asd", "afsd"];
let short_strings = [];

for(let i = 0; i < strings.length; i++){
    if(strings[i].length <= 5){
        short_strings.push(strings[i]);
    }
}

console.log(short_strings)