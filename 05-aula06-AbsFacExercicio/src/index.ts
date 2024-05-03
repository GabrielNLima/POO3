import Clients from "./clients/Clients";
import AiQFomeDelivery from "./delivery/AiQFomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";
import Company from "./delivery/Company";

const currentCompany = Company.AIQFOME;
let factory: IDeliveryFactory;

switch(currentCompany){
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    case Company.AIQFOME:
        factory = new AiQFomeDelivery();
        break;
    default:
        console.log("Delivery não especificado."); 
}

const client = new Clients(factory);
client.startDelivery();
