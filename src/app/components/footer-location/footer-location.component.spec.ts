import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLocationComponent } from './footer-location.component';

describe('FooterLocationComponent', () => {
  let component: FooterLocationComponent;
  let fixture: ComponentFixture<FooterLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
