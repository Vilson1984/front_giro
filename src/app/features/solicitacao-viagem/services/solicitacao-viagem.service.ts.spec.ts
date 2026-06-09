import { TestBed } from '@angular/core/testing';
import { SolicitacaoViagemService } from './solicitacao-viagem.service';

describe('SolicitacaoViagemService', () => {
  let service: SolicitacaoViagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoViagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
