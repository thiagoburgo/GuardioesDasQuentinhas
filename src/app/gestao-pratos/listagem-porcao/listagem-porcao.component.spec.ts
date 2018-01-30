import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPorcaoComponent } from './listagem-porcao.component';

describe('ListagemPorcaoComponent', () => {
  let component: ListagemPorcaoComponent;
  let fixture: ComponentFixture<ListagemPorcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPorcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPorcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
