import { TestBed } from '@angular/core/testing';

import { CanDactivateGuard } from './can-dactivate.guard';

describe('CanDactivateGuard', () => {
  let guard: CanDactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
