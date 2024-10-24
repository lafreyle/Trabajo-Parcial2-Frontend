import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanTypeComponent } from './update-loan-type.component';

describe('UpdateLoanTypeComponent', () => {
  let component: UpdateLoanTypeComponent;
  let fixture: ComponentFixture<UpdateLoanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLoanTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
