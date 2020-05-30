import { TestBed } from '@angular/core/testing';

import { AppsFilterService } from './apps-filter.service';

describe('AppsFilterService', () => {
  let service: AppsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
