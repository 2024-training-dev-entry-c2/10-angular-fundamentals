import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarAhoraComponent } from './ingresar-ahora.component';

describe('IngresarAhoraComponent', () => {
  let component: IngresarAhoraComponent;
  let fixture: ComponentFixture<IngresarAhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarAhoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarAhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
