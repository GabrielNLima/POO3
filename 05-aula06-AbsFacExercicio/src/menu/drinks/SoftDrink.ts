import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getType();
        console.log("Refrigerante: saiu para entrega...");
    }
    getType(): void {
        console.log("Refrigerante: pedido recebido com sucesso!");
    }

}