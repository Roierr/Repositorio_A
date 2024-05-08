for(let x=0; x<5; x++){
    if(x==2)
        continue;
    console.log(x);
}
let a = 10;
let b = a+5;
a += 5;
a = a + 5;
let+=5;

let x = 10;
x **= 2;
console.log(x);

const fecha = new Date();
console.log(fecha);

function myFunction(p1=3,p2=4){
    return p1 * p2;
}

console.log(myFuction(5,10));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);
//Funcion flecha
let otraFuncion = (a,b) => a * b

//Este imprimira el resultado de la funcion
console.log(otraFuncion(5,10))

//Este solo imprimira la funcion talcual
console.log(otraFuncion);

let otraFuncion2 = () =>{
    return a*b
}
console.log(otraFuncion2(4,80));

//Funcion autoejecutable
//sirve para que se ejecute la funcion sin necesidad de llamarla
/*(function(){
    console.log("Esta es una funcion anónima anonima autoejecutable");

})();
*/
(() => {console.log("Esta es una funcion anonima de flecha autoejecutable")})();

let alumno = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    curso: "Web",
    matricula: 92931,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
    //En cuanto objetos se refiere, no se puede usar funciones de flecha
    /*nombreCompleto2 = () => {this.nombre + " " + this.apellido}
    */
}