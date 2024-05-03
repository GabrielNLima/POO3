import Beer from "../menu/drinks/Beer";
import IDrink from "../menu/drinks/interfaces/IDrink";
import Hamburguer from "../menu/foods/Hamburguer";
import IFood from "../menu/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiQFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}