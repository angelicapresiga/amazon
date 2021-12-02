import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncomiendaModelo } from '../modelos/encomienda.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EncomiendaService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {
      this.token = this.seguridadService.getToken();
     }
     url = "http://localhost:3000"
     token: string = ''  

//crear encomienda
  store(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
    return this.http.post<EncomiendaModelo>(`${this.url}/encomiendas`, {
      descripcion: encomienda.descripcion,
      peso: encomienda.peso,
      tipo: encomienda.tipo,
      presentacion: encomienda.presentacion
  });
}

  //listar encomienda
  getAll(): Observable<EncomiendaModelo[]>{
    return this.http.get<EncomiendaModelo[]>(`${this.url}/encomiendas`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
  //Actualizar Encomienda
  update(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
    return this.http.patch<EncomiendaModelo>(`${this.url}/encomiendas/${encomienda.id}`, {
      descripcion: encomienda.descripcion,
      peso: encomienda.peso,
      tipo: encomienda.tipo,
      presentacion: encomienda.presentacion
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  // Eliminar Encomienda
  delete(id: string): Observable<EncomiendaModelo[]>{
    return this.http.delete<EncomiendaModelo[]>(`${this.url}/encomiendas/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
  // Consultar una encomienda
  getWithId(id: string): Observable<EncomiendaModelo>{
    return this.http.get<EncomiendaModelo>(`${this.url}/encomiendas/${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }






}
