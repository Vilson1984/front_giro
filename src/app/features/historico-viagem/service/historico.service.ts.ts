import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class HistoricoServiceTs {
  constructor(private http: HttpClient) {}

  getHistorico(idUsuario: string, idMotorista: string): Observable<any> {
   console.log(this.http.get(`http://localhost:3001/ride/${idUsuario}?driver_id=${idMotorista}`));
    return this.http.get(`http://localhost:3001/ride/${idUsuario}?driver_id=${idMotorista}`);
  }
}