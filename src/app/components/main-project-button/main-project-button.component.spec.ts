import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectButtonComponent } from './main-project-button.component';

describe('MainProjectButtonComponent', () => {
  let component: MainProjectButtonComponent;
  let fixture: ComponentFixture<MainProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProjectButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
