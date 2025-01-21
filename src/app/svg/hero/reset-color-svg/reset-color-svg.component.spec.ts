import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetColorSvgComponent } from './reset-color-svg.component';

describe('ResetColorSvgComponent', () => {
  let component: ResetColorSvgComponent;
  let fixture: ComponentFixture<ResetColorSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetColorSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetColorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
