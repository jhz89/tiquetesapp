import { TestBed, inject } from '@angular/core/testing';

import { RutaDataServiceService } from './ruta-data-service.service';

describe('RutaDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutaDataServiceService]
    });
  });

  it('should be created', inject([RutaDataServiceService], (service: RutaDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
