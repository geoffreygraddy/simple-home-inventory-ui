import { TestBed } from '@angular/core/testing';

import { HomeInventoryService } from './home-inventory.service';

describe('HomeInventoryService', () => {
  let service: HomeInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
