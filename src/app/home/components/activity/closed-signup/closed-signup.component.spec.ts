import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedSignupComponent } from './closed-signup.component';

describe('ClosedSignupComponent', () => {
  let component: ClosedSignupComponent;
  let fixture: ComponentFixture<ClosedSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
