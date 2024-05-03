import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getType();
        console.log("Cerveja: saiu para entrega...");
    }
    getType(): void {
        console.log("Cerveja: pedido recebido com sucesso!");
    }

}