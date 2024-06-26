import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }

}