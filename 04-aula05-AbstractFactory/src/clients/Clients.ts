import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";

export default class Clients{
    private vehicle: ILandVehicles;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}