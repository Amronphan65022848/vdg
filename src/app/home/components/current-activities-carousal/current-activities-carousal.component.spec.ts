import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentActivitiesCarousalComponent } from './current-activities-carousal.component';

describe('CurrentActivitiesCarousalComponent', () => {
  let component: CurrentActivitiesCarousalComponent;
  let fixture: ComponentFixture<CurrentActivitiesCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentActivitiesCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentActivitiesCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
