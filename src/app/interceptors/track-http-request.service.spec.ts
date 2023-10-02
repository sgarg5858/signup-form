import { TestBed } from '@angular/core/testing';

import { TrackHttpRequestService } from './track-http-request.service';

describe('TrackHttpRequestService', () => {
  let service: TrackHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
