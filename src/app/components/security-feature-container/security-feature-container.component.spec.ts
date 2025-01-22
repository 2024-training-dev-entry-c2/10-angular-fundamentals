import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFeatureContainerComponent } from './security-feature-container.component';

describe('SecurityFeatureContainerComponent', () => {
  let component: SecurityFeatureContainerComponent;
  let fixture: ComponentFixture<SecurityFeatureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFeatureContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFeatureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
