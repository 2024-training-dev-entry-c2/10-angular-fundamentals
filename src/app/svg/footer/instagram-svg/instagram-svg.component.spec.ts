import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramSvgComponent } from './instagram-svg.component';

describe('InstagramSvgComponent', () => {
  let component: InstagramSvgComponent;
  let fixture: ComponentFixture<InstagramSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
