import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollWrapperComponent } from './scroll-wrapper.component';

describe('ScrollWrapperComponent', () => {
  let component: ScrollWrapperComponent;
  let fixture: ComponentFixture<ScrollWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
