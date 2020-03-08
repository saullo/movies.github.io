import { TestBed } from '@angular/core/testing';

import { MovieClientService } from './movie-client.service';

describe('MovieClientService', () => {
  let service: MovieClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
