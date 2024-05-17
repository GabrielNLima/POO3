import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Encomenda encaminhada para envio da Transportadora.");
    }
    receive(): void {
        console.log("Encomenda recebida pela Transportadora.");
    }

}