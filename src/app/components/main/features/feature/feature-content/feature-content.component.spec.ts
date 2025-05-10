import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureContentComponent } from './feature-content.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

describe('FeatureContentComponent', () => {
  let component: FeatureContentComponent;
  let fixture: ComponentFixture<FeatureContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureContentComponent, TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
