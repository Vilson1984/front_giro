import { Component } from '@angular/core';
import { SolicitacaoViagemService } from '../../../solicitacao-viagem/services/solicitacao-viagem.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opcoes-viagem',
  imports: [CommonModule],
  templateUrl: './opcoes-viagem.html',
  styleUrl: './opcoes-viagem.scss',
  standalone: true  
})

export class OpcoesViagem {
  dados:any= null;
  constructor(private solicitacaoViagemService: SolicitacaoViagemService) {
  this.receberDados();
}
receberDados(){
  this.solicitacaoViagemService.dadosOpcoes.subscribe(dados => {
    this.dados = dados.optionsDrivers;
    console.log('Dados recebidos em OpcoesViagem:', dados.optionsDrivers);
  });
}
}
