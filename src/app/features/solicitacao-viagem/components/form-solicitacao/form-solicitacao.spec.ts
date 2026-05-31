import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitacao } from './form-solicitacao';

describe('FormSolicitacao', () => {
  let component: FormSolicitacao;
  let fixture: ComponentFixture<FormSolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSolicitacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
