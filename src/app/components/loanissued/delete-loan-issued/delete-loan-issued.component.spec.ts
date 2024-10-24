import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLoanIssuedComponent } from './delete-loan-issued.component';

describe('DeleteLoanIssuedComponent', () => {
  let component: DeleteLoanIssuedComponent;
  let fixture: ComponentFixture<DeleteLoanIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLoanIssuedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLoanIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
