var a = 1; // Variable de cualquier tipo (Esta manera ya no es recomendable)
// String, int, boolean, float, long, char, double
// Se setea automáticamente
let b = 2; // Variable de cualquier tipo
// String, int, boolean, float, long, char, double
// Espera a que concluya la petición o el proceso que esté por encima para setearse
const c = 3; // Declaración de constantes
// Las constantes no pueden cambiar su valor

const suma = function (a, b){
    return a+b;
}
console.log(suma(1,2));
console.log("Hola");

const rename = function(type) {
    if(type == 'Marvel'){
        return 'IRON MAN'
    }else{
        return 'BATMAN'
    }
}

console.log(rename('MARVEL'));

const bestTeam = (team) =>{
    switch(team){
        case 'Barcelona':
            return `Tu equipo es ${team} feliciades es buen equipo`;
            break;
        case 'Real Madrid':
            return `Tu equipo es ${team} feliciades es mal equipo`;
            break;
        default:
            return `No encontramos a tu equipo`;
    }
}

// JavaScript antiguo
const completeNameA = function(name, surname){
    return "Tu nombre completo es: " + name + " " + surname;
}

// JavaScript moderno
const completeNameM = (name, username) => `Tu nombre completo es : ${name} ${surname}`;


// JavaScript moderno
console.log(completeNameA('Erick', 'Mireles'));
console.log(completeNameA('Rodolfo', 'Campos'));

// Tarea

const sumar = ( num1 , num2 ) => num1 + num2;
console.log( sumar( 5 , 5 ) );

const restar = ( num1 , num2 ) => num1 - num2;
console.log( restar( 5 , 5 ) );

const multiplicar = ( num1 , num2 ) => num1 * num2;
console.log( multiplicar( 5 , 5 ) );

const dividir = ( num1 , num2 ) => num1 / num2;
console.log( dividir( 5 , 5 ) );

const multiplicarParametroNumero = ( num ) =>{
  while ( num < 1000 ) {
    num *= num;
  }
  console.log("Tu número ya alcanzo al 1000, se termina el ciclo")
  return num;
};

console.log(multiplicarParametroNumero(5));


// Tarea Resuelta

const sumaT = function(num1,num2 ){
    return num1 + num2;
};

const restaT = function(num1,num2 ){
    return num1 - num2;
};

const multiplicacionT = function(num1,num2 ){
    return num1 * num2;
};

const divisionT = function(num1,num2 ){
    return num1 / num2;
};

const thousandStop = (number) =>{
    for(let index = number; index <= 1000; index = index * number){
        console.log(`${index} * ${number} = ${index * number}`)
    }
    console.log("Hemos llegado al 1000, felicidades")
};





const getName = () =>{
    let name = document.getElementById("name").value;
    alert(`Hola, bienvenido: ${name}`);
}
