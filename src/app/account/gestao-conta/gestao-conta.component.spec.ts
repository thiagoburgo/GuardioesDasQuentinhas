import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoContaComponent } from './gestao-conta.component';

describe('GestaoContaComponent', () => {
  let component: GestaoContaComponent;
  let fixture: ComponentFixture<GestaoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
