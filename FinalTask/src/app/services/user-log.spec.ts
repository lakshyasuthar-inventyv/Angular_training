import { TestBed } from '@angular/core/testing';

import { UserLog } from './user-log';

describe('UserLog', () => {
  let service: UserLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
