import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesImagesComponent } from './features-images.component';

describe('FeaturesImagesComponent', () => {
  let component: FeaturesImagesComponent;
  let fixture: ComponentFixture<FeaturesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
