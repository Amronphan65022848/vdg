import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingActivitiesCarousalComponent } from './upcoming-activities-carousal.component';

describe('UpcomingActivitiesCarousalComponent', () => {
  let component: UpcomingActivitiesCarousalComponent;
  let fixture: ComponentFixture<UpcomingActivitiesCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingActivitiesCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingActivitiesCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
