import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLoanTypeComponent } from './delete-loan-type.component';

describe('DeleteLoanTypeComponent', () => {
  let component: DeleteLoanTypeComponent;
  let fixture: ComponentFixture<DeleteLoanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLoanTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
