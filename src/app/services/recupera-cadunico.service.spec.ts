import { TestBed } from '@angular/core/testing';

import { RecuperaCadunicoService } from './recupera-cadunico.service';

describe('RecuperaCadunicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperaCadunicoService = TestBed.get(RecuperaCadunicoService);
    expect(service).toBeTruthy();
  });
});
