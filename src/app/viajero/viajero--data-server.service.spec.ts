import { TestBed, inject } from '@angular/core/testing';

import { ViajeroDataServerService } from './viajero--data-server.service';

describe('ViajeroDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViajeroDataServerService]
    });
  });

  it('should be created', inject([ViajeroDataServerService], (service: ViajeroDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
