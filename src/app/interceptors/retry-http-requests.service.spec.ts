import { TestBed } from '@angular/core/testing';

import { RetryHttpRequestsService } from './retry-http-requests.service';

describe('RetryHttpRequestsService', () => {
  let service: RetryHttpRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetryHttpRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
