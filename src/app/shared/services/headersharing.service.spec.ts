import { TestBed } from '@angular/core/testing';

import { HeadersharingService } from './headersharing.service';

describe('HeadersharingService', () => {
  let service: HeadersharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadersharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
