import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Play 2: Jogo sendo iniciado!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Play 2: Carregando Bomba Patch 2024 100% atualizado.");
    }
    authToken(): void {
        console.log("Play 2: Autorizando sessão.");
    }

}