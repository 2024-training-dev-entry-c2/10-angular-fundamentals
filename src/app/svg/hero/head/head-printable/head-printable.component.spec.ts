import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPrintableComponent } from './head-printable.component';

describe('HeadPrintableComponent', () => {
  let component: HeadPrintableComponent;
  let fixture: ComponentFixture<HeadPrintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadPrintableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadPrintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
