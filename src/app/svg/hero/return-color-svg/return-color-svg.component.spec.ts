import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnColorSvgComponent } from './return-color-svg.component';

describe('ReturnColorSvgComponent', () => {
  let component: ReturnColorSvgComponent;
  let fixture: ComponentFixture<ReturnColorSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnColorSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnColorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
