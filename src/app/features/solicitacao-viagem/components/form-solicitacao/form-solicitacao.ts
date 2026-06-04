import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SolicitacaoViagem } from '../../services/solicitacao-viagem';

@Component({
  selector: 'app-form-solicitacao',
  imports: [FormsModule],
  templateUrl: './form-solicitacao.html',
  styleUrl: './form-solicitacao.scss',
  standalone: true,
})
export class FormSolicitacao {
  constructor(private SolicitacaoViagem: SolicitacaoViagem) {}
  idUsuario: string = '';
  origem: string = '';
  destino: string = '';

  estimarValor() {
    const dadosViagem = {
      customer_id: this.idUsuario,
      origin: this.origem,
      destination: this.destino,
    };
    this.SolicitacaoViagem.solicitacaoViagem(dadosViagem).subscribe(
      (response) => {
        console.log('>>>>>>>',response)
      }
    );
  }
}
