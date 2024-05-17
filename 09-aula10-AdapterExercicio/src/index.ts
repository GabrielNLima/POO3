import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const transportadora1 : ICorreios = new TransportadoraAdapter(new Transportadora());
transportadora1.sendCorreios();
transportadora1.receiveCorreios();

