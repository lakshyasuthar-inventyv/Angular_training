import { TestBed } from '@angular/core/testing';

import { UserLocation } from './user-location';

describe('UserLocation', () => {
  let service: UserLocation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
