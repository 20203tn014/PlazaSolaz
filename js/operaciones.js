
const formSuma = () =>{
    let suma1 = document.getElementById("suma1").value;
    let suma2 = document.getElementById("suma2").value;
    resultado = parseFloat(suma1) + parseFloat(suma2)
    alert(`El resultado de la operación es: ${resultado}`);
};


const formResta = () =>{
    let resta1 = document.getElementById("resta1").value;
    let resta2 = document.getElementById("resta2").value;
    resultado = resta1 - resta2
    alert(`El resultado de la operación es: ${resultado}`);
}


const formMulti = () =>{
    let multip1 = document.getElementById("multip1").value;
    let multip2 = document.getElementById("multip2").value;
    resultado = multip1 * multip2
    alert(`El resultado de la operación es: ${resultado}`);
}


const formDivis = () =>{
    let divis1 = document.getElementById("divis1").value;
    let divis2 = document.getElementById("divis2").value;
    resultado = divis1 / divis2
    alert(`El resultado de la operación es: ${resultado}`);
}


