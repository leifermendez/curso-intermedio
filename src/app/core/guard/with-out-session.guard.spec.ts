import { TestBed } from '@angular/core/testing';

import { WithOutSessionGuard } from './with-out-session.guard';

describe('WithOutSessionGuard', () => {
  let guard: WithOutSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithOutSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
