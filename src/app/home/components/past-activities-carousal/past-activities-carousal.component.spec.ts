import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastActivitiesCarousalComponent } from './past-activities-carousal.component';

describe('PastActivitiesCarousalComponent', () => {
  let component: PastActivitiesCarousalComponent;
  let fixture: ComponentFixture<PastActivitiesCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastActivitiesCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastActivitiesCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
