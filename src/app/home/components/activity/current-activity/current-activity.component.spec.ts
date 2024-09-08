import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentActivityComponent } from './current-activity.component';

describe('CurrentActivityComponent', () => {
  let component: CurrentActivityComponent;
  let fixture: ComponentFixture<CurrentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
