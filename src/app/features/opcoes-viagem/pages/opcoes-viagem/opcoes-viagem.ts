import { Component, OnInit } from '@angular/core';
import { SolicitacaoViagemService } from '../../../solicitacao-viagem/services/solicitacao-viagem.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-opcoes-viagem',
  imports: [CommonModule],
  templateUrl: './opcoes-viagem.html',
  styleUrls: ['./opcoes-viagem.scss'],
  standalone: true  
})
export class OpcoesViagem implements OnInit {
  dados$!: Observable<any[]>;
  route$!: Observable<{ origin: string; destination: string; encodedPolyline?: string } | null>;
  GOOGLE_API_KEY = environment.GOOGLE_API_KEY; // Pegando a chave do environment.ts

  constructor(private solicitacaoViagemService: SolicitacaoViagemService) {}
  
  ngOnInit(){
    this.dados$ = this.solicitacaoViagemService.dadosOpcoes;
    this.route$ = this.solicitacaoViagemService.route$;
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
}
