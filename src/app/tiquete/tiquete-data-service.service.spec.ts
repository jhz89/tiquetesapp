import { TestBed, inject } from '@angular/core/testing';

import { TiqueteDataServiceService } from './tiquete-data-service.service';

describe('TiqueteDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiqueteDataServiceService]
    });
  });

  it('should be created', inject([TiqueteDataServiceService], (service: TiqueteDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
