import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoViagemService {
  constructor(private http: HttpClient) {}

  estimateRide: any;

  calcularViagem(customer_id: string, origin: string, destination: string): Observable<any> {
    this.estimateRide = this.http.post('http://localhost:3001/ride/estimate', {
      customer_id,
      origin,
      destination,
    });
    return this.estimateRide;
  }

  private enviaDadosOpcoes = new BehaviorSubject<any>(''); // Inicializa com um valor padrão, se necessário
  dadosOpcoes = this.enviaDadosOpcoes.asObservable();
  enviaDados(dados: any) {
    this.enviaDadosOpcoes.next(dados);
  }
}
