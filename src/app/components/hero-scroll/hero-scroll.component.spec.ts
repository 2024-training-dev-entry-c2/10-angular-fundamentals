import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroScrollComponent } from './hero-scroll.component';

describe('HeroScrollComponent', () => {
  let component: HeroScrollComponent;
  let fixture: ComponentFixture<HeroScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
