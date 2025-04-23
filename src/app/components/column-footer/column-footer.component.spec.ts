import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFooterComponent } from './column-footer.component';

describe('ColumnFooterComponent', () => {
  let component: ColumnFooterComponent;
  let fixture: ComponentFixture<ColumnFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
