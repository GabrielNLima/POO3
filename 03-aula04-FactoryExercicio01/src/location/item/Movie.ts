import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Filme iniciado.");
    }
    getDescription(): void {
        console.log("Iniciando o filme.");
    }

}