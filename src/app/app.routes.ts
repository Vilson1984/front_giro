import { Routes } from '@angular/router';
import { SolicitacaoViagem } from './solicitacao-viagem/pages/solicitacao-viagem/solicitacao-viagem';

export const routes: Routes = [
  { path: 'solicitacao', component: SolicitacaoViagem },
  { path: '', redirectTo: '/solicitacao', pathMatch: 'full' },
];
