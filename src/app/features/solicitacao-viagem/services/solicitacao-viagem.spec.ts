import { TestBed } from '@angular/core/testing';

import { SolicitacaoViagem } from './solicitacao-viagem';

describe('SolicitacaoViagem', () => {
  let service: SolicitacaoViagem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoViagem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
