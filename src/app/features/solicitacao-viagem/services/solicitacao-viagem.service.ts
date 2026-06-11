import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoViagemService {
private enviaDadosOpcoes = new BehaviorSubject<any[]>([]);
dadosOpcoes = this.enviaDadosOpcoes.asObservable();

  constructor(private http: HttpClient) {}
  estimateRide: any;

  calcularViagem(customer_id: string, origin: string, destination: string): Observable<any> {
    return this.http.post('http://localhost:3001/ride/estimate', {
      customer_id,
      origin,
      destination,
    });
  }

  enviaDados(dados: any) {
    this.enviaDadosOpcoes.next(dados.optionsDrivers); // já manda só o array
  }
}
