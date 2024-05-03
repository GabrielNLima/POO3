import SoftDrink from "../menu/drinks/SoftDrink";
import IDrink from "../menu/drinks/interfaces/IDrink";
import HotDog from "../menu/foods/HotDog";
import IFood from "../menu/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}