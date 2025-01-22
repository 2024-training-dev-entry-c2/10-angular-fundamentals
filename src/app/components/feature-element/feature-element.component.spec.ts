import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureElementComponent } from './feature-element.component';

describe('FeatureElementComponent', () => {
  let component: FeatureElementComponent;
  let fixture: ComponentFixture<FeatureElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
