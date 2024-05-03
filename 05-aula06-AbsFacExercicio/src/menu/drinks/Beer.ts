import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getType();
        console.log("Beer: saiu para entrega...");
    }
    getType(): void {
        console.log("Beer: pedido recebido com sucesso!");
    }

}