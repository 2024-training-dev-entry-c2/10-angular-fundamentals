import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIsotypeComponent } from './navbar-isotype.component';

describe('NavbarIsotypeComponent', () => {
  let component: NavbarIsotypeComponent;
  let fixture: ComponentFixture<NavbarIsotypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarIsotypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIsotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
