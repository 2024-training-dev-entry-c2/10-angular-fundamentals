import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardListComponent } from './pricing-card-list.component';

describe('PricingCardListComponent', () => {
  let component: PricingCardListComponent;
  let fixture: ComponentFixture<PricingCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
