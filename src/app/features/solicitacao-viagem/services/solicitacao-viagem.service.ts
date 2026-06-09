import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoViagemService {
  constructor(private http: HttpClient) {}
  
  calcularViagem(customer_id: string, origin: string, destination: string): Observable<any> {
    return this.http.post('http://localhost:3001/ride/estimate', {
      customer_id,
      origin,
      destination
    });
  }
  // "customer_id": "123",
  // "origin": "Av. Jaguaribe, Osasco",
  // "destination": "Praça da Sé, São Paulo"
}
