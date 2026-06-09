import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesViagem } from './opcoes-viagem';

describe('OpcoesViagem', () => {
  let component: OpcoesViagem;
  let fixture: ComponentFixture<OpcoesViagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesViagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesViagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
