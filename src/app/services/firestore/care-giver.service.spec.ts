import { TestBed } from '@angular/core/testing';

import { CareGiverService } from './care-giver.service';

describe('CareGiverService', () => {
  let service: CareGiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareGiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
