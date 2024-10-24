import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLoanComponent } from './delete-loan.component';

describe('DeleteLoanComponent', () => {
  let component: DeleteLoanComponent;
  let fixture: ComponentFixture<DeleteLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
