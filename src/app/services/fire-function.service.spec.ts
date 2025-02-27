import { TestBed } from '@angular/core/testing';

import { FireFunctionService } from './fire-function.service';

describe('FireFunctionService', () => {
  let service: FireFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
