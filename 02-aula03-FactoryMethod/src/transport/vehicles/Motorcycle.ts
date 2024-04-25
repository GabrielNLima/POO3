import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Trajeto iniciado...");
    }
    getCargo(): void {
        console.log("Moto: Encomenda a caminho!");
    }
}