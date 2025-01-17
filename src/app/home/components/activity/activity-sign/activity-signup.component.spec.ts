import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignupComponent } from './activity-signup.component';

describe('ActivitySignupComponent', () => {
  let component: ActivitySignupComponent;
  let fixture: ComponentFixture<ActivitySignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitySignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
