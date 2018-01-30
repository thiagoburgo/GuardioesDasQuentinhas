import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontagemPratoComponent } from './montagem-prato.component';

describe('MontagemPratoComponent', () => {
  let component: MontagemPratoComponent;
  let fixture: ComponentFixture<MontagemPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontagemPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontagemPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
