import { TestBed } from '@angular/core/testing';

import { ItemPoolService } from './item-pool.service';

describe('ItemPoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemPoolService = TestBed.get(ItemPoolService);
    expect(service).toBeTruthy();
  });
});
