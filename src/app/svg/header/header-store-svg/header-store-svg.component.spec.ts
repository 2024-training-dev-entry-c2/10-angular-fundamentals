import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStoreSvgComponent } from './header-store-svg.component';

describe('HeaderStoreSvgComponent', () => {
  let component: HeaderStoreSvgComponent;
  let fixture: ComponentFixture<HeaderStoreSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderStoreSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderStoreSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
