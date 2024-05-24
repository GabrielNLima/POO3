import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: Jogos sendo iniciados!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Carregando biblioteca de jogos.");
    }
    authToken(): void {
        console.log("Xbox: Autorizando sessão.");
    }
    

}