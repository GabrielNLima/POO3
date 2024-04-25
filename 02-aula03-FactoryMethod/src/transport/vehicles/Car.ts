import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }
}