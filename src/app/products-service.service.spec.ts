/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsServiceService } from './products-service.service';

describe('ProductsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsServiceService]
    });
  });

  it('should ...', inject([ProductsServiceService], (service: ProductsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
