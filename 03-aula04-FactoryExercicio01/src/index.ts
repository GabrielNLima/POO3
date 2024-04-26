import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";

declare var process;

let location : Location;
if(process.argv.includes("GTA")){
    location = new GameLocation();
}else if(process.argv.includes("Mafia")){
    location = new MovieLocation();
}else{
    console.log("Selecione o tipo correto de locacao!");
}
if(location) {
    location.startItem();
}