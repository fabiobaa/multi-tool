export class Copia {
    idCopia!: number;
    idCategoria: number;
    nombreCategoria!:string;
    nombre: string;
    texto: string;
    favorito: boolean;
    fecha: Date;

    constructor(idCategoria: number, nombre: string, texto: string, favorito: boolean, fecha: Date) {
        this.idCategoria = idCategoria
        this.nombre = nombre;
        this.texto = texto;
        this.favorito = favorito;
        this.fecha = fecha;
    }
}