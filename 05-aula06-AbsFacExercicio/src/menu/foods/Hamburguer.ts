import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getType();
        console.log("Hamburguer: saiu para entrega...");
    }
    getType(): void {
        console.log("Hamburguer: recebido com sucesso!");
    }

}