import { ClienteModelo } from "./cliente.model";
import { EncomiendaModelo } from "./encomienda.model";

export class ServicioModelo{
    id?: String;
    fecha?: String;
    hora?: String;
    valor?: number;
    origen?: String;
    destino?: String;
    encomienda?: String;
}
