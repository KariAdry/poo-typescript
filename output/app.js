"use strict";
console.log("hola mundo");
console.log("hola otro mundo");
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value) {
        this.valorA = value;
    }
    set ValorB(value) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
let operacionS = new Suma();
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.Sumar();
console.log("el resaultado de la suma es " + operacionS.Resultado);
class Resta extends Operacion {
    // constructor ()
    // {
    //     super();
    // }
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let operacionR = new Resta();
operacionR.ValorA = 45;
operacionR.ValorB = 10;
operacionR.Restar();
console.log("el resultado de la resta es " + operacionR.Resultado);
function calcularIva(articulos) {
    let total = 0;
    articulos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
class Articulo {
}
//# sourceMappingURL=app.js.map