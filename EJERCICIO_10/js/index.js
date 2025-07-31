const temperture = [10, -1, 15, 16, 25, 29, -2, -3]

for(let i = 0; i < temperture.length; i++){
    if(temperture[i] < 15){
        console.log("Frio(", String(temperture[i]), "Grados)")
    }else if(temperture[i] >= 15 & temperture[i] <= 25){
        console.log("Normal (", String(temperture[i]), "Grados)")
    }else{
        console.log("Calor (", String(temperture[i]), "Grados)")
    }
}