import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardsContainerComponent } from './slide-cards-container.component';

describe('SlideCardsContainerComponent', () => {
  let component: SlideCardsContainerComponent;
  let fixture: ComponentFixture<SlideCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
