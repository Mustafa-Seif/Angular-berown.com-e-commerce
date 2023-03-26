import { TestBed } from '@angular/core/testing';

import { ErrorToFetchService } from './error-to-fetch.service';

describe('ErrorToFetchService', () => {
  let service: ErrorToFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorToFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
