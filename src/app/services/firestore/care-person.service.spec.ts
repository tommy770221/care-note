import { TestBed } from '@angular/core/testing';

import { CarePersonService } from './care-person.service';

describe('CarePersonService', () => {
  let service: CarePersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarePersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
