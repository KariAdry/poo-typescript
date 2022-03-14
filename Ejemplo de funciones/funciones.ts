function calcularIva (articulos:Articulo[]):[number, number]{
    let total=0;
    articulos.forEach(({precio})=>{
        total +=precio;
    });

    return [total ,total *0.15];
}



class Articulo {
    precio!:number;
}