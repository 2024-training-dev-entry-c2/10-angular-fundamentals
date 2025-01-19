import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStatusComponent } from './footer-status.component';

describe('FooterStatusComponent', () => {
  let component: FooterStatusComponent;
  let fixture: ComponentFixture<FooterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
