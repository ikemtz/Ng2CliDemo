/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogsService } from './blogs.service';

describe('BlogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsService]
    });
  });

  it('should ...', inject([BlogsService], (service: BlogsService) => {
    expect(service).toBeTruthy();
  }));
});
