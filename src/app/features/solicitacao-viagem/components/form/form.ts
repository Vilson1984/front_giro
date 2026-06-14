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
  constructor(private solicitacaoViagemService: SolicitacaoViagemService) {}
  userId: string = '';
  origin: string = '';
  destination: string = '';
  estimate: any = null;

  calcular() {
    this.solicitacaoViagemService.calcularViagem(this.userId, this.origin, this.destination)
      .subscribe({
        next: response => {
          this.estimate = response;
          console.log('Estimativa de viagem:', response);

          const encodedPolyline = response?.route?.overviewPolyline;
          this.solicitacaoViagemService.enviaDados(
            this.estimate,
            this.origin,
            this.destination,
            encodedPolyline,
          );
        },
        error: error => {
          console.error('Erro ao calcular viagem:', error);
        }
      });
  }
}
