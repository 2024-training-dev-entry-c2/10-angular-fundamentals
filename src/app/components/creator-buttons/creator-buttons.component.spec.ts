import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorButtonsComponent } from './creator-buttons.component';

describe('CreatorButtonsComponent', () => {
  let component: CreatorButtonsComponent;
  let fixture: ComponentFixture<CreatorButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
