import { TestBed } from '@angular/core/testing';

import { LoanissuedService } from './loanissued.service';

describe('LoanissuedService', () => {
  let service: LoanissuedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanissuedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
