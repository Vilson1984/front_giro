import { Component, OnInit } from '@angular/core';
import { SolicitacaoViagemService } from '../../../solicitacao-viagem/services/solicitacao-viagem.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-opcoes-viagem',
  imports: [CommonModule],
  templateUrl: './opcoes-viagem.html',
  styleUrls: ['./opcoes-viagem.scss'],
  standalone: true  
})
export class OpcoesViagem {
  dados$!: Observable <any>; 
  
  constructor(private solicitacaoViagemService: SolicitacaoViagemService) {}
  
  ngOnInit(){
    this.dados$ = this.solicitacaoViagemService.dadosOpcoes; // Observable direto
  }
}
