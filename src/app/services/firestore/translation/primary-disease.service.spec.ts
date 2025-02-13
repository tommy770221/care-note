import { TestBed } from '@angular/core/testing';

import { PrimaryDiseaseService } from './primary-disease.service';

describe('PrimaryDiseaseService', () => {
  let service: PrimaryDiseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryDiseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
