import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperInvitationComponent } from './newspaper-invitation.component';

describe('NewspaperInvitationComponent', () => {
  let component: NewspaperInvitationComponent;
  let fixture: ComponentFixture<NewspaperInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewspaperInvitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
