import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuIconComponent } from './footer-menu-icon.component';

describe('FooterMenuIconComponent', () => {
  let component: FooterMenuIconComponent;
  let fixture: ComponentFixture<FooterMenuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMenuIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
