import MercadoPago from "../mercadoPago/MercadoPago";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypalPayment{
    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando Mercado Pago no Paypal.");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.sendPayment();
    }
    paypalReceive(): void {
        this.mercadoPago.receivePayment();
    }

}