import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Jogo iniciado.");
    }
    getDescription(): void {
        console.log("Iniciando o jogo.");
    }

}