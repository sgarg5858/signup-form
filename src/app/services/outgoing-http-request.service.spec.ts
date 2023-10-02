import { TestBed } from '@angular/core/testing';

import { OutgoingHttpRequestService } from './outgoing-http-request.service';

describe('OutgoingHttpRequestService', () => {
  let service: OutgoingHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutgoingHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
