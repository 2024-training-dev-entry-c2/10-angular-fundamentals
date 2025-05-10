import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigationMenuComponent } from './header-navigation-menu.component';

describe('HeaderNavigationMenuComponent', () => {
  let component: HeaderNavigationMenuComponent;
  let fixture: ComponentFixture<HeaderNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavigationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
