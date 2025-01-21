import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSummaryComponent } from './features-summary.component';

describe('FeaturesSummaryComponent', () => {
  let component: FeaturesSummaryComponent;
  let fixture: ComponentFixture<FeaturesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
