import { TestBed } from '@angular/core/testing';

import { ShowrommserviceService } from './showrommservice.service';

describe('ShowrommserviceService', () => {
  let service: ShowrommserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowrommserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
