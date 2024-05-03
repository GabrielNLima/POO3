import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getType();
        console.log("SoftDrink: saiu para entrega...");
    }
    getType(): void {
        console.log("SoftDrink: pedido recebido com sucesso!");
    }

}