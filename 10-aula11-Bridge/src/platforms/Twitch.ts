import IPlatform from "./interfaces/IPlatform";

export default class Twitch implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma configurada.");
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando broadcasting.");
    }
    authToken(): void {
        console.log("Twitch: Autorizando plataforma.");
    }
}