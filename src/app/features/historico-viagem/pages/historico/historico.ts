import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoricoServiceTs } from '../../service/historico.service.ts';

@Component({
  selector: 'app-historico',
  imports: [FormsModule, CommonModule, ],
  templateUrl: './historico.html',
  styleUrl: './historico.scss',
})
export class Historico {
  constructor(private historicoService:HistoricoServiceTs){}

  idUsuario:string = ''
  idMotorista:string = ''
  
  pesquisar(usuario:string, motorista:string){
    this.idUsuario = usuario
    this.idMotorista = motorista    
    // console.log(
    //   "this.idUsuario", this.idUsuario,
    //   "this.idMotorista", this.idMotorista,
    // )
    console.log("RESULT: ",
    this.historicoService.getHistorico(this.idUsuario, this.idMotorista)
  )

  }
  
}
