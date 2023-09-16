import { TestBed } from '@angular/core/testing';

import { UserLoggedinGuard } from './user-loggedin.guard';

describe('UserLoggedinService', () => {
  let service: UserLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoggedinGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
