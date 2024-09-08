import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetyourpasswordComponent } from './resetyourpassword.component';

describe('ResetyourpasswordComponent', () => {
  let component: ResetyourpasswordComponent;
  let fixture: ComponentFixture<ResetyourpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetyourpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetyourpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
