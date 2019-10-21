import { TestBed } from '@angular/core/testing';

import { GamesListService } from './games-list.service';

describe('GamesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesListService = TestBed.get(GamesListService);
    expect(service).toBeTruthy();
  });
});
