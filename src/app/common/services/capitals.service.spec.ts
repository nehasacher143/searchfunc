import { TestBed } from '@angular/core/testing';

import { CapitalsService } from './capitals.service';

describe('CapitalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapitalsService = TestBed.get(CapitalsService);
    expect(service).toBeTruthy();
  });
});
