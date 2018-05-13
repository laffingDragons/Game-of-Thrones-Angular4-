import { TestBed, inject } from '@angular/core/testing';

import { GotService } from './got.service';

describe('GotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotService]
    });
  });

  it('should be created', inject([GotService], (service: GotService) => {
    expect(service).toBeTruthy();
  }));
});
