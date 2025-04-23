import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinampLogoComponent } from './winamp-logo.component';

describe('WinampLogoComponent', () => {
  let component: WinampLogoComponent;
  let fixture: ComponentFixture<WinampLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinampLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinampLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
