class Forma
{
nombre: string = "";

Dibujar ()
{
        console.log ("Implementacion metodo Dibujar clase base");
}
}

class Rectangulo extends Forma
{
    nombre: string="";
    base: number=0;
    altura:number=0;

    Dibujar()
    {
        console.log("Implementacion metodo Dibujar clase hija Rectangulo");
    }
}

class Circulo extends Forma
{
    nombre:string="";
    radio:number=0;

    Dibujar()
    {
        console.log("Implementacion metodo Dibujar clase hija Circulo")
    }

}