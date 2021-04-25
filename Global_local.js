var global = 60; //Se puede usar en cualquier parte del codigo

function Suma(){
    var a = 5;  //variable local
    var b = 6;  //variable local
    c = 10;     //Se convierte en una variable global

    var funcionLocal = () =>{
        return a**2 + c
    }

    return funcionLocal();
}

console.log(Suma());
console.log(c);

(function(){
    var Numero = 50;
    console.log(`El numero es ${Numero}`);
}());

//La funcion se auto invoca