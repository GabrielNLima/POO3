import IConsole from "./consoles/interfaces/IConsole";
import Playstation from "./consoles/Playstation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./play/AdvancedPlay";

function startAdvancedPlay(consoles: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
        play.playing();
        play.result();
        play.challenge();
        console.log("");
}

startAdvancedPlay(new Playstation());
startAdvancedPlay(new Xbox());

