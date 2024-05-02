import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}