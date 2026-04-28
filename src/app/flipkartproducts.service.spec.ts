import { TestBed } from '@angular/core/testing';

import { FlipkartproductsService } from './flipkartproducts.service';

describe('FlipkartproductsService', () => {
  let service: FlipkartproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
