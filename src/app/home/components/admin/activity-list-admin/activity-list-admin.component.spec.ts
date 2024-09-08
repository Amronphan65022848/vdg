import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListAdminComponent } from './activity-list-admin.component';

describe('ActivityListAdminComponent', () => {
  let component: ActivityListAdminComponent;
  let fixture: ComponentFixture<ActivityListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityListAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
