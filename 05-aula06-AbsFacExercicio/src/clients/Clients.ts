import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../menu/drinks/interfaces/IDrink";
import IFood from "../menu/foods/interfaces/IFood";

export default class Clients{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(): void{
        this.food.startDelivery();
        this.drink.startDelivery();
    }
}