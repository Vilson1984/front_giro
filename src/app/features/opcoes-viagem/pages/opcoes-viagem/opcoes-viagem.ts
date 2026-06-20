import { Component, OnInit } from '@angular/core';
import { SolicitacaoViagemService } from '../../../solicitacao-viagem/services/solicitacao-viagem.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opcoes-viagem',
  imports: [CommonModule],
  templateUrl: './opcoes-viagem.html',
  styleUrls: ['./opcoes-viagem.scss'],
  standalone: true,
})
export class OpcoesViagem implements OnInit {
  dados$!: Observable<any[]>;
  route$!: Observable<{ origin: string; destination: string; encodedPolyline?: string } | null>;
  GOOGLE_API_KEY = environment.GOOGLE_API_KEY; // Pegando a chave do environment.ts

  mockDados = {
    customer_id: '42',
    origin: 'Av. Jaguaribe, Osasco',
    destination: 'itu',
    distance: 83.849,
    duration: '1.1819444444444445',
    driver: {
      id: 3,
      name: 'James Bond',
    },
    value: 838.49,
  };

  selectedDriverId?: number;
  selectedDriverName?: string;
  selectedRoute?: { origin: string; destination: string; encodedPolyline?: string } | null;

  constructor(
    private solicitacaoViagemService: SolicitacaoViagemService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.dados$ = this.solicitacaoViagemService.dadosOpcoes;
    this.route$ = this.solicitacaoViagemService.route$;
    this.route$.subscribe(route => {
      this.selectedRoute = route;
    });
    console.log('Dados das opções de viagem:', this.dados$);
    console.log('Dados da rota:', this.route$);
  }

  getRouteMapUrl(origin: string, destination: string, encodedPolyline?: string): string {
    const origem = encodeURIComponent(origin);
    const destino = encodeURIComponent(destination);

    let path = `color:0x0000ff|weight:5|${origem}|${destino}`;
    if (encodedPolyline) {
      path = `color:0x0000ff|weight:5|enc:${encodeURIComponent(encodedPolyline)}`;
    }

    return `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=color:green|${origem}&markers=color:red|${destino}&path=${path}&key=${this.GOOGLE_API_KEY}`;
  }
  
  selectDriver(item: any) {
    const travel = {
      customer_id: '42',
      origin: this.selectedRoute?.origin,
      destination: this.selectedRoute?.destination,
      distance: 50,
      duration: '1.1819444444444445',
      driver: {
        id: item.driver.id,
        name: item.driver.name,
      },
      value: item.price
    };

    this.http.patch('http://localhost:3001/ride/confirm', travel)
      .subscribe({
        next: response => console.log('Resposta da confirmação:', response),
        error: error => console.error('Erro na confirmação:', error),
      });
  }
}
