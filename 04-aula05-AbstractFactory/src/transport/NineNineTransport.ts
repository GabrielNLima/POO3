import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}