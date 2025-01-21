import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbousPart2Component } from './abous-part2.component';

describe('AbousPart2Component', () => {
  let component: AbousPart2Component;
  let fixture: ComponentFixture<AbousPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbousPart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbousPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
