import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartproductsComponent } from './flipkartproducts.component';

describe('FlipkartproductsComponent', () => {
  let component: FlipkartproductsComponent;
  let fixture: ComponentFixture<FlipkartproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
