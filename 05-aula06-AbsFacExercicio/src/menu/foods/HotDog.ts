import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getType();
        console.log("HotDog: Saiu para entrega...");
    }
    getType(): void {
        console.log("HotDog: recebido com sucesso!");
    }

}