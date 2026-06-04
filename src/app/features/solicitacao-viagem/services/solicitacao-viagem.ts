import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoViagem {
  constructor(private http: HttpClient) {}
  private apiurl = 'http://localhost:3001/ride/estimate';

  solicitacaoViagem(dadosViagem: any): Observable<any> {
    console.log('Dados da viagem:', dadosViagem);
    
    console.log('>>>>>', this.http.post<any>(this.apiurl, dadosViagem));
    return this.http.post<any>(this.apiurl, dadosViagem);
  }
}
