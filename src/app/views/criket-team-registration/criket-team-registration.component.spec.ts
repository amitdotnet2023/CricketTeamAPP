import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriketTeamRegistrationComponent } from './criket-team-registration.component';

describe('CriketTeamRegistrationComponent', () => {
  let component: CriketTeamRegistrationComponent;
  let fixture: ComponentFixture<CriketTeamRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriketTeamRegistrationComponent]
    });
    fixture = TestBed.createComponent(CriketTeamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
