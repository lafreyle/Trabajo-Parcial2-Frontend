import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanIssuedComponent } from './update-loan-issued.component';

describe('UpdateLoanIssuedComponent', () => {
  let component: UpdateLoanIssuedComponent;
  let fixture: ComponentFixture<UpdateLoanIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLoanIssuedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoanIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
