import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedFormComponent } from './closed-form.component';

describe('ClosedFormComponent', () => {
  let component: ClosedFormComponent;
  let fixture: ComponentFixture<ClosedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
