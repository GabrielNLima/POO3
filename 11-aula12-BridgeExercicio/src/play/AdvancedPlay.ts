import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    
    constructor(consoles : IConsole){
        super(consoles);
    }
    challenge(): void{
        console.log("Vença a taça comandando o Corinthians.");
    }

}