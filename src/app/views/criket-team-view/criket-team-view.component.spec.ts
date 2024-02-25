import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriketTeamViewComponent } from './criket-team-view.component';

describe('CriketTeamViewComponent', () => {
  let component: CriketTeamViewComponent;
  let fixture: ComponentFixture<CriketTeamViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriketTeamViewComponent]
    });
    fixture = TestBed.createComponent(CriketTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
