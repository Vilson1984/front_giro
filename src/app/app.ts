import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitacaoViagem } from './features/solicitacao-viagem/pages/solicitacao-viagem/solicitacao-viagem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SolicitacaoViagem],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('front_giro');
}
