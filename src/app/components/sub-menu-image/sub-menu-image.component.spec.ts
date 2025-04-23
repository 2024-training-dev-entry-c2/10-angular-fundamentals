import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuImageComponent } from './sub-menu-image.component';

describe('SubMenuImageComponent', () => {
  let component: SubMenuImageComponent;
  let fixture: ComponentFixture<SubMenuImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMenuImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
