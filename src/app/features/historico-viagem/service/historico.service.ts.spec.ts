import { TestBed } from '@angular/core/testing';

import { HistoricoServiceTs } from './historico.service.ts';

describe('HistoricoServiceTs', () => {
  let service: HistoricoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
