// Ejercicio 1
let person = {
	name: "Sonia",
	age: 32,
	profession:"Developer"
	
};

//Function to covert Object in Array
function converToArray(obj){
	let properties = [];
	
	if (typeof obj 	=== 'object'){
		properties = Object.getOwnPropertyNames(obj);	
	}
	return properties;
	
}

document.getElementById("resultado-1").innerHTML = `return -> [${converToArray(person)}]`;
// Ejercicio 2
document.getElementById("resultado-2.0").innerHTML = `Uso innerWith de window (this.innerWidth): ${this.innerWidth}`;

function getInnerHeight(){
  return this.innerHeight;
}
document.getElementById("resultado-2.1").innerHTML = `Uso innerHeight de window (this.innerHeight) obtenida en una función: ${getInnerHeight()}`;

function f1(){
  'use strict'
  return this;
}
document.getElementById("resultado-2.2").innerHTML = `Strict mode: ${f1()}`;

let obj = {
  prop : "property",
  f1() {
    return this.prop;
  }
}

document.getElementById("resultado-2.3").innerHTML = `En un método: ${obj.f1()}`;

const result = {
  prop : "property",
  f1:() => {
    return this.prop;
  }
}


document.getElementById("resultado-2.4").innerHTML = `En un arrow function: ${result.f1()}`;

const btnExcerciseTwo = document.getElementById("btnExcerciseTwo");
btnExcerciseTwo.addEventListener("click", function() {
  this.style.backgroundColor = "black";
});

function callApplyFunction(){
  return `${this.name} ${this.lastname}`
}

let student = {name:"Sonia",lastname:"Rojas"};
document.getElementById("resultado-2.5").innerHTML = `call(): ${callApplyFunction.call(student)}`;

document.getElementById("resultado-2.6").innerHTML = `apply(): ${Math.max.apply(null,[15,200,-5,20,3])}`;

let otherStudent = {name:"Francisco",lastname:"Ruiz"};
let bindFuntion = callApplyFunction.bind(otherStudent);
document.getElementById("resultado-2.7").innerHTML = `bind(): ${bindFuntion()}`;

// Ejercicio 3
let invertedString = input => input.split("").reverse().join("");
document.getElementById("resultado-3").innerHTML = invertedString("Hola Mundo");
// Ejercicio 4
class Login {
  constructor(username, password){
      this.username = username;
      this.password = password;
  }

  login(){
      if (this.username === "admin" && this.password === "passwd"){
          alert ("User logged in");
      }else{
          alert ("User or password incorrect");
      }
  }
}

// Ejercicio 5

const btnLoginSuccess = document.getElementById('loginSuccess');

btnLoginSuccess.addEventListener('click', () => {
  let login = new Login("admin","passwd");
  login.login();
});

const btnLoginFailure = document.getElementById('loginFailure');

btnLoginFailure.addEventListener('click', () => {
  let login = new Login("sonia","abc");
  login.login();
});
// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};


const btnLoginSuccessAsync = document.getElementById('loginSuccessAsync');
btnLoginSuccessAsync.addEventListener('click', async => {  

  loginWitUsername("admin", "passwd").then( (resolved) => {
        alert(resolved);
    })
    .catch( (rejected) => {
        alert(rejected);
    })
});

const btnLoginFailureAsync = document.getElementById('loginFailureAsync');
btnLoginFailureAsync.addEventListener('click', async => {
  loginWitUsername("sonia", "abc").then( (resolved) => {
        alert(resolved);
    })
    .catch( (rejected) => {
        alert(rejected);
    })
});

