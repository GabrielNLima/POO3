import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando a decolagem!");
    }
    getCargo(): void {
        console.log("Drone: encomenda recebida!");
    }
    checkWind(): void {
        console.log("Drone: ventos a 20 km/h.");
    }
}