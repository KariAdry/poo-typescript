class Turbina
{
    private numeroTurbinas: number;

    public constructor (n:number)
    {
        this.numeroTurbinas =n;
    }
    public ToString()
    {
        return this.numeroTurbinas + " turbina/s";
    }
}

class Cubierta
{
    private cabinaTripulacion : boolean;
    private cabinaVuelo :boolean;
    private sistemaEmergencia: boolean;
    private numTanquesCombust: number;
    private numPuertasSalida: number;

    public constructor (pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombust:number, pPuertasSalida:number)
    {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombust = pTanquesCombust;
        this.numPuertasSalida =pPuertasSalida;

    }

    public ToString()
    {
        let mensaje= "Cubierta compuesta de: ";
        if (this.cabinaVuelo)
        {
            mensaje+=" Cubierta de vuelo: ";
        }
        if (this.cabinaTripulacion)
        {
            mensaje += " Cubierta de tripulacion: ";
        }
        if (this.sistemaEmergencia)
        {
            mensaje += " sistema de emergencia: ";


        }
        mensaje+= this.numTanquesCombust + " tanques de combustible ";
        mensaje += this.numPuertasSalida + " puertas de salida ";
        return mensaje;

    }

}

class Aeroplano
{
    private helices: number;
    private trenAterrizaje: boolean;
    private alas: number;
    private cubierta: Cubierta;

    constructor (phelice:number, pTrenAterrizaje:boolean, pAlas:number, pCubierta:Cubierta )
    {
        this.helices = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public ToString()
    {
        let mensaje ="Aeroplano compuesto por: ";
        mensaje+= this.helices;
        mensaje+=this.trenAterrizaje;
        mensaje+=this.alas;
        mensaje+=this.cubierta.ToString();


    }

}