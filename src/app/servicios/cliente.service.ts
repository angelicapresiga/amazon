import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModelo } from '../modelos/cliente.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { 
      this.token = this.seguridadService.getToken();
    }
    url = "http://localhost:3000"
    token: string = ''

    //crear cliente
    store(cliente: ClienteModelo): Observable<ClienteModelo> {
      return this.http.post<ClienteModelo>(`${this.url}/clientes`, {
        cedula: cliente.cedula,
        nombre: cliente.nombre,
        apellidos: cliente.apellidos,
        pais: cliente.pais,
        ciudad: cliente.ciudad,
        departamento: cliente.departamento,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        correo: cliente.email
      });
    }

    //listar cliente
    getAll(): Observable<ClienteModelo[]>{
      return this.http.get<ClienteModelo[]>(`${this.url}/clientes`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //actualizar cliente
    update(cliente: ClienteModelo): Observable<ClienteModelo> {
      return this.http.patch<ClienteModelo>(`${this.url}/clientes/${cliente.id}`, {
        cedula: cliente.cedula,
        nombre: cliente.nombre,
        apellidos: cliente.apellidos,
        pais: cliente.pais,
        ciudad: cliente.ciudad,
        departamento: cliente.departamento,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        correo: cliente.email
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    //eliminar cliente
    delete(id: string): Observable<ClienteModelo[]>{
    return this.http.delete<ClienteModelo[]>(`${this.url}/clientes/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
    //consultar un cliente
    getWithId(id: string): Observable<ClienteModelo>{
      return this.http.get<ClienteModelo>(`${this.url}/clientes/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

}
