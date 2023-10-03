import { TestBed } from '@angular/core/testing';

import { DatosRegionalerService } from './datos-regionaler.service';

describe('DatosRegionalerService', () => {
  let service: DatosRegionalerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosRegionalerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
