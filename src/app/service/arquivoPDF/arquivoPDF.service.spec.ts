/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ArquivoPDFService } from './arquivoPDF.service';

describe('Service: ArquivoPDF', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArquivoPDFService]
    });
  });

  it('should ...', inject([ArquivoPDFService], (service: ArquivoPDFService) => {
    expect(service).toBeTruthy();
  }));
});
