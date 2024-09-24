import { TestBed } from '@angular/core/testing';

import { ObservabledataService } from './observabledata.service';

describe('ObservabledataService', () => {
  let service: ObservabledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservabledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
