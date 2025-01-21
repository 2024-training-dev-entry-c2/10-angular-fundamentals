import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContactSvgComponent } from './header-contact-svg.component';

describe('HeaderContactSvgComponent', () => {
  let component: HeaderContactSvgComponent;
  let fixture: ComponentFixture<HeaderContactSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderContactSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContactSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
