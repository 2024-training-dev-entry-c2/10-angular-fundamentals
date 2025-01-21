import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingBandComponent } from './sliding-band.component';

describe('SlidingBandComponent', () => {
  let component: SlidingBandComponent;
  let fixture: ComponentFixture<SlidingBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingBandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
