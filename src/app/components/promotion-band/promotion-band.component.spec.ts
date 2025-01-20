import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBandComponent } from './promotion-band.component';

describe('PromotionBandComponent', () => {
  let component: PromotionBandComponent;
  let fixture: ComponentFixture<PromotionBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionBandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
