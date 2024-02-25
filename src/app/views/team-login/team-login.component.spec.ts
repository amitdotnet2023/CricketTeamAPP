import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLoginComponent } from './team-login.component';

describe('TeamLoginComponent', () => {
  let component: TeamLoginComponent;
  let fixture: ComponentFixture<TeamLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLoginComponent]
    });
    fixture = TestBed.createComponent(TeamLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
