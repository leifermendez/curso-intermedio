import { TestBed } from '@angular/core/testing';

import { HandleEventsService } from './handle-events.service';

describe('HandleEventsService', () => {
  let service: HandleEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
