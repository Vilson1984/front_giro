import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitacaoViagem } from './features/solicitacao-viagem/pages/solicitacao-viagem/solicitacao-viagem';
import { OpcoesViagem } from './features/opcoes-viagem/pages/opcoes-viagem/opcoes-viagem';
import { Historico } from './features/historico-viagem/pages/historico/historico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SolicitacaoViagem, OpcoesViagem, Historico],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('front_giro');
}
