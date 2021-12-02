import { ClienteModelo } from "./cliente.model";
import { EncomiendaModelo } from "./encomienda.model";

export class ServicioModelo{
    id?: String;
    fecha?: String;
    hora?: string;
    valor?: number;
    origen?: ClienteModelo;
    destino?: ClienteModelo;
    encomienda?: EncomiendaModelo;
}
