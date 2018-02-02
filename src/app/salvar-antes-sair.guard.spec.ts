import { TestBed, async, inject } from '@angular/core/testing';

import { SalvarAntesSairGuard } from './salvar-antes-sair.guard';

describe('SalvarAntesSairGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalvarAntesSairGuard]
    });
  });

  it('should ...', inject([SalvarAntesSairGuard], (guard: SalvarAntesSairGuard) => {
    expect(guard).toBeTruthy();
  }));
});
