import { Routes } from '@angular/router';
import { SolicitacaoViagem } from './solicitacao-viagem/pages/solicitacao-viagem/solicitacao-viagem';
import { FormSolicitacao } from './features/solicitacao-viagem/components/form-solicitacao/form-solicitacao';
export const routes: Routes = [
  { path: 'solicitacao', component: SolicitacaoViagem },
  { path: 'form-solicitacao', component: FormSolicitacao },
  { path: '', redirectTo: '/solicitacao', pathMatch: 'full' },
];
