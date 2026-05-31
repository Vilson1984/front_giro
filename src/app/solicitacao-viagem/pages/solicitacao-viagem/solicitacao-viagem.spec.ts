import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoViagem } from './solicitacao-viagem';

describe('SolicitacaoViagem', () => {
  let component: SolicitacaoViagem;
  let fixture: ComponentFixture<SolicitacaoViagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoViagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoViagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
