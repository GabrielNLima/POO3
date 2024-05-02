import ILandVehicles from "./interfaces/ILandVehicles";

export default class Scooter implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: iniciando trajeto!");
    }
    getCargo(): void {
        console.log("Scooter: pacote recebido!");
    }
}