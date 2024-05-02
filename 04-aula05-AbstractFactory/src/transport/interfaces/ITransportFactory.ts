import IAircraft from "../../vehicles/aerial/interfaces/IAircraft";
import ILandVehicles from "../../vehicles/land/interfaces/ILandVehicles";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicles;
    createTransportAircraft(): IAircraft;
}