import IDrink from "../../menu/drinks/interfaces/IDrink";
import IFood from "../../menu/foods/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}