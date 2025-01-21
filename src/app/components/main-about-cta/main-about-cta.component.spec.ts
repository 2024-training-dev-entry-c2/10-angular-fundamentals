import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAboutCtaComponent } from './main-about-cta.component';

describe('MainAboutCtaComponent', () => {
  let component: MainAboutCtaComponent;
  let fixture: ComponentFixture<MainAboutCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAboutCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAboutCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
