import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectImagesComponent } from './main-project-images.component';

describe('MainProjectImagesComponent', () => {
  let component: MainProjectImagesComponent;
  let fixture: ComponentFixture<MainProjectImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProjectImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProjectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
