import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMosaicComponent } from './hero-mosaic.component';

describe('HeroMosaicComponent', () => {
  let component: HeroMosaicComponent;
  let fixture: ComponentFixture<HeroMosaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMosaicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
