import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoricoServiceTs } from '../../service/historico.service.ts';

@Component({
  selector: 'app-historico',
  imports: [FormsModule, CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss',
})
export class Historico {
  constructor(private historicoService: HistoricoServiceTs) {}

  idUsuario: string = '';
  idMotorista: string = '';
  historico: any[] = [];

  pesquisar(usuario: string, motorista: string) {
    this.idUsuario = usuario;
    this.idMotorista = motorista;

    this.historicoService.getHistorico(this.idUsuario, this.idMotorista).subscribe({
      next: (dados) => {
        this.historico = Array.isArray(dados) ? dados : [dados];
        console.log('DADOS:', dados);
        console.log('historico:', this.historico[0].rides);
        this.historico = this.historico[0].rides; // Acessa a propriedade "rides" do primeiro elemento do array
      },
      error: (erro) => console.error('Erro ao buscar histórico', erro),
    });
  }
}
