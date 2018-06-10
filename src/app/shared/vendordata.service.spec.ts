/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VendordataService } from './vendordata.service';

describe('Service: Vendordata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendordataService]
    });
  });

  it('should ...', inject([VendordataService], (service: VendordataService) => {
    expect(service).toBeTruthy();
  }));
});
