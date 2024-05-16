import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import Paypal from "./paypal/Paypal";
import IPaypalPayment from "./paypal/interfaces/IPaypalPayment";

// const paymentPaypal : IPaypalPayment = new Paypal();
const payment : IPaypalPayment = new MercadoPagoAdapter(new MercadoPago());
payment.paypalPayment();
payment.paypalReceive();

