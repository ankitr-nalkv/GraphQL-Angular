import { TestBed } from '@angular/core/testing';

import { FetchListService } from './fetch-list.service';

describe('FetchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchListService = TestBed.get(FetchListService);
    expect(service).toBeTruthy();
  });
});
