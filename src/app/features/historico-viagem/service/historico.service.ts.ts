import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class HistoricoServiceTs {
  constructor(private http:HttpClient){}

  getHistorico(idUsuario:string, idMotorista:string){
    // console.log(">>>>>>>>>>>>> getHistorico", idUsuario, idMotorista) 
    const response =
   this.http.get("http://localhost:3001/ride/"+idUsuario)
    .subscribe(
      {next: response => console.log(response)}
    )

    return response
  }
}

// http://localhost:3001/ride/42
// http://localhost:3001/ride/IdDoUsuario