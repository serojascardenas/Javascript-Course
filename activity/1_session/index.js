import {stringToPrint} from './aboutme.js'
import {divisibleFor7} from './divisibleForSeven.js'
// Ejercicio 1
document.getElementById("resultado-1").innerHTML = stringToPrint;
console.log("Ej 1");
console.log(stringToPrint)

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
document.getElementById('resultado-4').innerHTML = divisibleFor7();


// Ejercicio 5

// Ejercicio 6

let formatter = {
    prefix : "Hello",
    append: function(str){
        str = `${formatter.prefix} ${str}`;
        console.log(str);
        return str;
    }
};
document.getElementById('resultado-6.1').innerHTML = formatter.append("Sonia");

formatter.toLowerString = function(str){
    str = str.toLowerCase();
    console.log(str);
    return str;
};

document.getElementById('resultado-6.2').innerHTML = formatter.toLowerString("I'm Sonia");