import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsParaMiComponent } from './es-para-mi.component';

describe('EsParaMiComponent', () => {
  let component: EsParaMiComponent;
  let fixture: ComponentFixture<EsParaMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsParaMiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsParaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
