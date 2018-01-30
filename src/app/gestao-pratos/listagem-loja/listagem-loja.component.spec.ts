import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLojaComponent } from './listagem-loja.component';

describe('ListagemLojaComponent', () => {
  let component: ListagemLojaComponent;
  let fixture: ComponentFixture<ListagemLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
