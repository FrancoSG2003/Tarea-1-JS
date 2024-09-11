let nombre = "Santiago";
let apellido = "Franco";
let edad = "21";
let saludo = "";
let ciudad = "medellin";

const edadMinima = "18";
const color = "negro";
const pais = "Colombia"
const pi = 3.1415;
const animal = "perro";



//sin parametros
//una sola funcion
hola = () => {
    console.log('Hola profesor');
};

hola();

//con varias funciones   generador de numeros random, si el numero es mayor que 5 se le restan 5 en caso contrario se le suman
const generarN = () => Math.random() * 10;

const ruleta = generarN();
resultado = ruleta > 5? ruleta - 5 : ruleta + 5 ;
console.log(`el numero generado es: ${ruleta}`);
console.log(`teniendo en cuenta el numeor generado, el resultado es ${resultado}`);



//Con un parametro
//Una sola funcion
saludoN = nombre = 'saludos ' + nombre;
console.log(saludoN)

//Dos funciones
saludo = nombre === "Simon" ? "Hola simon": "No eres simon";
console.log(saludo);

//Con dos parametros
//una sola funcion
concatenar = (cadena1, cadena2) => cadena1 + "" + cadena2;
console.log(concatenar("soy de ", "Medellin"));

//Dos funciones  imprime el cuadrado de cada uno de los numeros dentro del vector
numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    const squared = (num) => num * num;
    console.log(squared(numeros[i]));
}


