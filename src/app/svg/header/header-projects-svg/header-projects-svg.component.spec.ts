import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProjectsSvgComponent } from './header-projects-svg.component';

describe('HeaderProjectsSvgComponent', () => {
  let component: HeaderProjectsSvgComponent;
  let fixture: ComponentFixture<HeaderProjectsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProjectsSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProjectsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
