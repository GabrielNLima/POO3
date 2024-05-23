import IPlatform from "./interfaces/IPlatform";

export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma configurada.");
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando broadcasting.");
    }
    authToken(): void {
        console.log("Facebook: Autorizando plataforma.");
    }
}