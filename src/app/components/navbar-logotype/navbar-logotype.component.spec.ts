import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogotypeComponent } from './navbar-logotype.component';

describe('NavbarLogotypeComponent', () => {
  let component: NavbarLogotypeComponent;
  let fixture: ComponentFixture<NavbarLogotypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLogotypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLogotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
