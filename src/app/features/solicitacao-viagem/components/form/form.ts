import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SolicitacaoViagemService } from '../../services/solicitacao-viagem.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  constructor(private service: SolicitacaoViagemService) {}
  userId: string = '';
  origin: string = '';
  destination: string = '';
  estimate: any = null;

  calcular() {
    this.service.calcularViagem(this.userId, this.origin, this.destination)
      .subscribe({
        next: response => { 
          this.estimate = response;
          console.log('Estimativa de viagem:', response);
        },
        error: error => {
          console.error('Erro ao calcular viagem:', error);
        }
      });
  }
}
