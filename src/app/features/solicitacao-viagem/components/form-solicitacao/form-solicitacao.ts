import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-solicitacao',
  imports: [FormsModule],
  templateUrl: './form-solicitacao.html',
  styleUrl: './form-solicitacao.scss',
  standalone: true,
})
export class FormSolicitacao {
idUsuario: string = '';
origem: string = '';
destino: string = '';
}
