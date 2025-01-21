import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryButtonComponent } from './gallery-button.component';

describe('GalleryButtonComponent', () => {
  let component: GalleryButtonComponent;
  let fixture: ComponentFixture<GalleryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
