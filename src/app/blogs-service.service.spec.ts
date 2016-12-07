/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogsServiceService } from './blogs-service.service';

describe('BlogsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsServiceService]
    });
  });

  it('should ...', inject([BlogsServiceService], (service: BlogsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
