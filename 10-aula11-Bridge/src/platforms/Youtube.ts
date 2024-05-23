import IPlatform from "./interfaces/IPlatform";

export default class Youtube implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Youtube: Plataforma configurada.");
    }
    configureRMTP(): void {
        this.authToken();
        console.log("YouTube: Configurando broadcasting.");
    }
    authToken(): void {
        console.log("YouTube: Autorizando plataforma.");
    }
}