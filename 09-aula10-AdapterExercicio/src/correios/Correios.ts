import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Encomenda encaminhada para envio Correios.");
    }
    receiveCorreios(): void {
        console.log("Encomenda recebida pelo Correios.");
    }

}