import { TestBed } from '@angular/core/testing';

import { WbService } from './wb.service';

describe('WbService', () => {
  let service: WbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
