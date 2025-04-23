import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorSectionComponent } from './creator-section.component';

describe('CreatorSectionComponent', () => {
  let component: CreatorSectionComponent;
  let fixture: ComponentFixture<CreatorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
