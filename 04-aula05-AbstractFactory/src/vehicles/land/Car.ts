import ILandVehicles from "./interfaces/ILandVehicles";

export default class Car implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: iniciando trajeto!");
    }
    getCargo(): void {
        console.log("Carro: passageiros embarcados!");
    }
}