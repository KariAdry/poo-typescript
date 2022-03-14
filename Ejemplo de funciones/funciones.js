"use strict";
function calcularIva(articulos) {
    let total = 0;
    articulos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
class Articulo {
}
//# sourceMappingURL=funciones.js.map