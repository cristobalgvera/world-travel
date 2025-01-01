import { TestBed } from '@angular/core/testing';

import { FindAllItemsService } from './find-all-items.service';

describe('FindAllItemsService', () => {
  let service: FindAllItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAllItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
