import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionItemComponent } from './acordion-item.component';

describe('AcordionItemComponent', () => {
  let component: AcordionItemComponent;
  let fixture: ComponentFixture<AcordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcordionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
