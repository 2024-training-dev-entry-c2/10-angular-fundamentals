import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationCardComponent } from './animation-card.component';

describe('AnimationCardComponent', () => {
  let component: AnimationCardComponent;
  let fixture: ComponentFixture<AnimationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
