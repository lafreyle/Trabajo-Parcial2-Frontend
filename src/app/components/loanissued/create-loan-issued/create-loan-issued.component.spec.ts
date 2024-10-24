import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanIssuedComponent } from './create-loan-issued.component';

describe('CreateLoanIssuedComponent', () => {
  let component: CreateLoanIssuedComponent;
  let fixture: ComponentFixture<CreateLoanIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLoanIssuedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoanIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
