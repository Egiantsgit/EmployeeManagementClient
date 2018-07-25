import { TestBed, inject } from '@angular/core/testing';

import { VendorCallDetailsService } from './vendor-call-details.service';

describe('VendorCallDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorCallDetailsService]
    });
  });

  it('should be created', inject([VendorCallDetailsService], (service: VendorCallDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
