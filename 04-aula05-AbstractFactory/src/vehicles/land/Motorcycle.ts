import ILandVehicles from "./interfaces/ILandVehicles";

export default class Motorcycle implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando trajeto!");
    }
    getCargo(): void {
        console.log("Moto: pacote recebido!");
    }
}