
//Función para encontrar los números divisibles para 7, entre el 1 y el 100
function divisibleFor7(){
    let strDivisibleFor7= 'Números divisible para 7 ente el 1 y el 100:';
    for(let i = 1; i<=100; i++){
        if (i%7===0){
            console.log(`Número: ${i}`);
            strDivisibleFor7 = `${strDivisibleFor7}  ${i} ,`;
        }
    }

    strDivisibleFor7 = strDivisibleFor7.substr(0, strDivisibleFor7.length - 1).concat('.');
    return strDivisibleFor7;
}

export {divisibleFor7};