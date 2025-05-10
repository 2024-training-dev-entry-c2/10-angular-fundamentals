import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectBannerComponent } from './main-project-banner.component';

describe('MainProjectBannerComponent', () => {
  let component: MainProjectBannerComponent;
  let fixture: ComponentFixture<MainProjectBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProjectBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProjectBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
