/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MudaClasseService } from './mudaClasse.service';

describe('Service: MudaClasse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MudaClasseService]
    });
  });

  it('should ...', inject([MudaClasseService], (service: MudaClasseService) => {
    expect(service).toBeTruthy();
  }));
});
